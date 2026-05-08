const http = require("http");

const server = http.createServer((req, res) => {
  res.write(`server is running on port 3000 and is updated`);
  res.end();
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
