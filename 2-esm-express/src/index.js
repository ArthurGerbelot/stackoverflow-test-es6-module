import express from 'express';

// From ES Module only
import { sayHello } from 'test-es6-module-npm-package';
// From ES Module part of Hybrid one (ESM with Babel to also provide commonjs)
import { sayHello as sayHello2 } from 'test-es6-module-with-commonjs';

const PORT = process.env.PORT || 7000;
const app = express();

app.listen(PORT, async () => {
  sayHello(`I'm server on port ${PORT}`);
  sayHello2(`again, I'm server on port ${PORT}`);
});
