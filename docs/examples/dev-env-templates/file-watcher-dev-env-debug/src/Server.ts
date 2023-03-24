import express from 'express';

const server = express();

server.use('/index', (_req, res) => {
  res.status(200).json({ hello: "world3" });
});

server.listen(8000, () => { console.log('Running on localhost:8000') })