const http = require("http");

const server = http.createServer((req, res) => {
  res.write(`this is updated resposnse and this is upadted code`);
  res.end();
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
