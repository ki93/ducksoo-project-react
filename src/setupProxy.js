const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      // target: 'http://9.8.100.27:3000',
      target: 'http://localhost:5000',
      changeOrigin: true,
    })
  );
};
// const createProxyMiddleware = require('http-proxy-middleware')
// module.exports = app => {
//   app.use(
//     createProxyMiddleware(
//       ['/api', '/socket.io'],
//       {
//         target: 'http://localhost:5000',
//         changeOrigin: true,
//         ws: true,
//         router: {
//           '/socket.io': 'ws://nginx:80'
//         }
//       }
//     )
//   )
// }