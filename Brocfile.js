/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp();

var pickFiles = require('broccoli-static-compiler');

// Font Awesome Setup
var fontAwesomeFontTree = pickFiles('vendor/font-awesome/fonts', {
  srcDir: '/',
  files: [
    'fontawesome-webfont.eot',
    'fontawesome-webfont.ttf',
    'fontawesome-webfont.svg',
    'fontawesome-webfont.woff'
  ],
  destDir: '/assets/fonts'
});

var mergeTrees = require('broccoli-merge-trees');
module.exports = mergeTrees([app.toTree(), fontAwesomeFontTree]);
