var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');

var app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3434, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('listening @ localhost:3434');
});
