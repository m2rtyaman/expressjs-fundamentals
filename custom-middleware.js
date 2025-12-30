const express = require("express");
const app = express();

const requestTimestampLogger = (req, res, next) => {
  const timeStamp = new Date().toISOString();
  console.log(`${timeStamp} from ${req.method} to ${req.url}`);
  next();
};


app.use(requestTimestampLogger);
app.get("/", (req, res) => {
    res.send("Home Page")
});
const port = 3000;
app.listen(port, () => {
  console.log(
    `server is running port ${port} and fast link is http://localhost:${port}`
  );
});
