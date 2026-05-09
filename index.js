const http = require("http");

const server = http.createServer((req, res) => {
  res.write(`this is done from cicd and is upadated aging********`);
  res.end();
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
