const express = require('express');

// From ES Module part of Hybrid one (ESM with Babel to also provide commonjs)
const ES6Module = require('test-es6-module-with-commonjs');

const PORT = process.env.PORT || 7000;
const app = express();

app.listen(PORT, async () => {
  ES6Module.sayHello(`I'm server on port ${PORT}`);
});
