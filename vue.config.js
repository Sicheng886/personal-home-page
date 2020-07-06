const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}

// vue.config.js
module.exports = {
  chainWebpack: config => {
    config.resolve.alias.set("styles", resolve("src/assets/styles"));
    config.resolve.alias.set("common", resolve("src/common")); // 自定义路径名以让代码简洁
  },
  //参考 https://cli.vuejs.org/zh/config/#devserver-proxy
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:8080",
        pathRewrite: {
          "^/api": "/data" // rewrite path
        }
      }
    }
  }
};
