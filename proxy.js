module.exports = {
  '/api/*': {
    target: '',
    secure: false,
    changeOrigin: true,
    pathRewrite: {"^/api" : "/api"}
  }
}
