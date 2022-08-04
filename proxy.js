const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const fs = require("fs");
const https = require("https");

// HTTPS Options
const httpsoptions = {
    key: fs.readFileSync("server.key"),
    cert: fs.readFileSync("server.cert") 
  };

// proxy middleware options
const onError = function (err, req, res) {
    console.log('Something went wrong.');
    console.log('And we are reporting a custom error message.');
  };

  
  function onProxyReq(proxyReq, req, res) {
  // add new header to request
  // Headers set here won't show in browser network trace
}

/** @type {import('http-proxy-middleware/dist/types').Options} */
const proxyoptions = {
  target: 'ORIGIN FROM AUTH0', // target host
  onProxyRes: function (proxyRes, req, res) {
    proxyRes.headers['Access-Control-Allow-Origin'] = '*';
  },
  changeOrigin: true, // needed for virtual hosted sites
  ws: true, // proxy websockets,
  headers: {
    'cname-api-key': 'CONFIG KEY FROM AUTH0',
    'host': 'HOST THIS APP IS RUNNING UNDER',
    'origin': 'ORIGIN FROM AUTH0'
  },
  router: {
    // when request.headers.host == 'dev.localhost:3000',
    // override target 'http://www.example.org' to 'http://localhost:8000'
    //'dev.localhost:3000': 'http://localhost:8000',
  },
  logger: console,
  logLevel: 'debug',
  on: { 'error': onError, 'proxyReq': onProxyReq }
};

// create the proxy (without context)
const exampleProxy = createProxyMiddleware(proxyoptions);

// mount `exampleProxy` in web server
const app = express();
app.use('/', exampleProxy);

https.createServer(httpsoptions, app).listen(443);