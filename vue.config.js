// const MangleCssClassPlugin = require("mangle-css-class-webpack-plugin");

module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "@/styles/index.scss";`,
      },
    },
  },
};
