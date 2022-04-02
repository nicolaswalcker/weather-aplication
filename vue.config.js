module.exports = {
  configureWebpack: {
    plugins: [
      //
    ],
    optimization: {
      splitChunks: {
        chunks: 'all',
        minSize: 9000,
        maxSize: 140000,
      },
    },
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
        @import "@/assets/sass/base/_colors.scss";
        @import "@/assets/sass/base/_variables.scss";
        @import "@/assets/sass/base/_breakpoints.scss";
        @import "@/assets/sass/base/_elements.scss";
        @import "@/assets/sass/base/_mixins.scss";
        @import "@/assets/sass/base/_utils.scss";
        @import "@/assets/sass/base/_keyframes.scss";
        @import "@/assets/sass/base/_normalize.scss";
        @import "@/assets/sass/base/global.scss";
        `,
      },
    },
  },
};
