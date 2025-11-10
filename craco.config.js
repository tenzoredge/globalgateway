// craco.config.js
const path = require("path");
require("dotenv").config();

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    configure: (webpackConfig) => {
      // Configure watch options to ignore certain directories
      webpackConfig.watchOptions = {
        ignored: [
          '**/node_modules/**',
          '**/.git/**',
          '**/build/**',
          '**/dist/**',
          '**/coverage/**',
          '**/public/**',
        ]
      };
      return webpackConfig;
    }
  }
};
