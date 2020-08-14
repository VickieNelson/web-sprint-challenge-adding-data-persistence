const server = require("./server.js");

const PORT = process.env.PORT || 5005;

server.get("/", (req, res) => {
  res.send("It's working!");
});

server.listen(PORT, () => {
  console.log(`Running on ${PORT} ...`);
});
