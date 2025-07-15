import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { AiOutlineMail, AiOutlineUser, AiOutlineMessage } from "react-icons/ai";
import { FaEnvelope } from "react-icons/fa";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validasi form
    if (!formData.name || !formData.email || !formData.message) {
      setAlertMessage("Please fill in all required fields!");
      setShowAlert(true);
      return;
    }

    // Email tujuan (ganti dengan email Anda)
    const recipientEmail = "rahmatez1@gmail.com";

    // Buat subject yang informatif
    const emailSubject = formData.subject
      ? `Portfolio Contact: ${formData.subject}`
      : `Portfolio Contact from ${formData.name}`;

    // Buat body email yang rapi dan profesional
    const emailBody = `
Halo!

Saya mengirim pesan ini melalui form contact di website portfolio Anda.

=== INFORMASI PENGIRIM ===
Nama: ${formData.name}
Email: ${formData.email}
${formData.subject ? `Subject: ${formData.subject}` : ""}

=== PESAN ===
${formData.message}

---
Pesan ini dikirim dari: ${window.location.href}
Tanggal: ${new Date().toLocaleDateString("id-ID", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })}

Terima kasih!
    `.trim();

    // Buat mailto link yang akan membuka email client user
    const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(
      emailSubject
    )}&body=${encodeURIComponent(emailBody)}`;

    // Redirect ke email client default user
    window.location.href = mailtoLink;

    // Show success message
    setAlertMessage(
      "📧 Email akan terbuka dengan pesan yang sudah terisi otomatis!"
    );
    setShowAlert(true);

    // Reset form setelah delay singkat
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 2000);

    // Hide alert after 8 seconds
    setTimeout(() => {
      setShowAlert(false);
    }, 8000);
  };

  return (
    <div className="contact-form-container">
      <h3 className="contact-title">
        <AiOutlineMail /> Send Me a Message
      </h3>

      {showAlert && (
        <Alert
          variant="info"
          dismissible
          onClose={() => setShowAlert(false)}
          style={{ marginBottom: "20px" }}>
          {alertMessage}
        </Alert>
      )}

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>
            <AiOutlineUser /> Name *
          </Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
            style={{
              backgroundColor: "transparent",
              border: "1px solid #854ce6",
              color: "white",
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>
            <AiOutlineMail /> Email *
          </Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
            style={{
              backgroundColor: "transparent",
              border: "1px solid #854ce6",
              color: "white",
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Subject</Form.Label>
          <Form.Control
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Enter subject"
            style={{
              backgroundColor: "transparent",
              border: "1px solid #854ce6",
              color: "white",
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>
            <AiOutlineMessage /> Message *
          </Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your message"
            required
            style={{
              backgroundColor: "transparent",
              border: "1px solid #854ce6",
              color: "white",
              resize: "vertical",
            }}
          />
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          className="contact-submit-btn"
          style={{
            backgroundColor: "#854ce6",
            border: "none",
            padding: "12px 30px",
            fontSize: "16px",
            fontWeight: "600",
            borderRadius: "8px",
            transition: "all 0.3s ease",
          }}>
          <FaEnvelope className="me-2" />
          Send Message
        </Button>
      </Form>
    </div>
  );
}

export default ContactForm;
