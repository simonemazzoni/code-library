const sharedConfig = require('../../../karma.conf.js');

module.exports = (config) => {
  sharedConfig(config);
  config.set({
    files: [
      '../../../node_modules/babel-polyfill/dist/polyfill.min.js',
      '../../../node_modules/chai/chai.js',
      '../../../node_modules/sinon/pkg/sinon.js',
      '../node_modules/element-closest/element-closest.js',
      '../node_modules/tiny-emitter/dist/tinyemitter.min.js',
      '../src/scroll-feedback.js',
      'test.js',
    ],
  });
};
