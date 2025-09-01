import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/RahmatAshariCV.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [numPages, setNumPages] = useState(null);

  useEffect(() => {
    setWidth(window.innerWidth);
    
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    console.log(`PDF loaded with ${numPages} pages`);
  }

  function onDocumentLoadError(error) {
    console.error('Error loading PDF:', error);
  }

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}>
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume">
          <Document
            file={pdf}
            className="d-flex justify-content-center flex-column align-items-center"
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={onDocumentLoadError}
            loading={<div style={{color: 'white', textAlign: 'center'}}>Loading PDF...</div>}
            error={<div style={{color: 'white', textAlign: 'center'}}>Failed to load PDF. Please try again.</div>}
            noData={<div style={{color: 'white', textAlign: 'center'}}>No PDF data found.</div>}
            options={{
              disableTextLayer: true,
              disableAnnotationLayer: true,
              disableWorker: false,
            }}>
            {/* Page 1 */}
            <div className="pdf-page-container mb-4">
              <Page
                pageNumber={1}
                scale={width > 786 ? 1.7 : 0.6}
                renderTextLayer={false}
                renderAnnotationLayer={false}
                loading={<div style={{color: 'white', textAlign: 'center', padding: '20px'}}>Loading page 1...</div>}
                error={<div style={{color: 'white', textAlign: 'center', padding: '20px'}}>Error loading page 1</div>}
              />
            </div>
            
            {/* Page 2 - Only render if PDF has more than 1 page */}
            {numPages && numPages > 1 && (
              <div className="pdf-page-container">
                <Page
                  pageNumber={2}
                  scale={width > 786 ? 1.7 : 0.6}
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                  loading={<div style={{color: 'white', textAlign: 'center', padding: '20px'}}>Loading page 2...</div>}
                  error={<div style={{color: 'white', textAlign: 'center', padding: '20px'}}>Error loading page 2</div>}
                />
              </div>
            )}
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}>
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
