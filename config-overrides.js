const { override, addWebpackResolve } = require("customize-cra");

module.exports = override(
  addWebpackResolve({
    fallback: {
      "react/jsx-runtime": require.resolve("react/jsx-runtime.js"),
      "react/jsx-dev-runtime": require.resolve("react/jsx-dev-runtime.js"),
    },
    alias: {
      "react/jsx-runtime": require.resolve("react/jsx-runtime.js"),
      "react/jsx-dev-runtime": require.resolve("react/jsx-dev-runtime.js"),
    },
  })
);
