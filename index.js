const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const MILI = 1000;

app.get("/wait/:waitSeconds", (req, res) => {
  const timeToWait = req.params.waitSeconds;
  const { url, ip, method } = req;

  const logInfo = `${ip} ${method} ${url}`;

  console.log(`${logInfo} Request Started...`);
  globalThis.setTimeout(() => {
    res.send(`Sent a response with a ${timeToWait} seconds delay`);
    console.log(`${logInfo} Response Sent`);
  }, timeToWait * MILI);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
