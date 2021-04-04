const { createProxyMiddleware } = require("http-proxy-middleware");

// module.exports = function (app) {
//   app.use(
//     ["/api", "/api2"],
//     createProxyMiddleware({
//       target: "http://localhost:3070",
//       changeOrigin: true,
//       pathRewrite: {
//         "^/api2": "/api", // rewrite path
//       },
//     })
//   );
// };

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://localhost:3080",
      changeOrigin: true,
    })
  );
  app.use(
    "/api2",
    createProxyMiddleware({
      target: "http://localhost:3070",
      changeOrigin: true,
    })
  );
};
