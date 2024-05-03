
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://co2data.fi/api/co2data_construction.json',
      changeOrigin: true,
    })
  );
};
