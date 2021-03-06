#!/usr/bin/env node
const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const merge = require('webpack-merge');
const asciify = require('asciify-image');

const { argv } = require('yargs')
  .usage('Usage: $0 --extension-app http://localhost:4000')
  .describe('extension-app', 'The app url to load')
  .demandOption(['extension-app']);


const port = 5000;
const path = require('path');
const Config = require('./webpack.cli');

const options = {
  https: true,
  hot: true,
  inline: true,
  stats: { colors: true },
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
  proxy: [{
    context: [
      '/app.html',
      '/controller.bundle.js',
      '/app.bundle.js',
      '/bundle.json',
      '/favicon.ico',
      '/app.css',
    ],
    target: argv.extensionApp,
    secure: false,
  }, {
    context: ['/assets/'],
    target: argv.extensionApp,
    secure: false,
  },
  ],
};

const webpackConfig = merge(Config, {
  mode: 'development',
  devtool: 'eval-source-map',
});

const server = new WebpackDevServer(Webpack(webpackConfig), options);


const asciiConfig = {
  fit: 'box',
  width: 150,
  height: 20,
};

asciify('./src/assets/symphony-logo.png', asciiConfig)
  .then((ascii) => {
    console.log(ascii);
    server.listen(port, '0.0.0.0', (err) => {
      if (err) {
        console.log(err);
      }
      console.log('WebpackDevServer listening at localhost:', port);
    });
  });
