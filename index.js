const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const MILI = 1000;

app.get("/wait/:waitSeconds", (req, res) => {
  const timeToWait = req.params.waitSeconds;
  globalThis.setTimeout(
    () =>
      res.send(
        `Well that was worth waiting for, all ${timeToWait} seconds of it`
      ),
    timeToWait * MILI
  );
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
