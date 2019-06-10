const express = require('express');
const app = express();
const apiRouter = require('./api');

app.use("/api/v1", apiRouter);

app.listen(3000, () => {
  console.log("Listening on port 3000")
});
