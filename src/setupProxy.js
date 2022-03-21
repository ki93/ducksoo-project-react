const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      // target: 'http://9.8.100.27:3000',
      target: 'http://localhost:3001',
      changeOrigin: true,
    })
  );
};