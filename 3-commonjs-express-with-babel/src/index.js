import express from 'express';

const PORT = process.env.PORT || 7000;
const app = express();

app.listen(PORT, async () => {
  console.log(`I'm server on port ${PORT}`);
});
