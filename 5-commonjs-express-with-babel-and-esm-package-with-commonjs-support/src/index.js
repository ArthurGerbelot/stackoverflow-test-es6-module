import express from 'express';

import { sayHello } from 'test-es6-module-with-commonjs';

const PORT = process.env.PORT || 7000;
const app = express();

app.listen(PORT, async () => {
  sayHello(`I'm server on port ${PORT}`);
});
