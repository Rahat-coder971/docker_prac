const http = require("http");

const server = http.createServer((req, res) => {
  res.write(`server is running on port 3000 and is updated and this imge is the latest v2`);
  res.end();
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
