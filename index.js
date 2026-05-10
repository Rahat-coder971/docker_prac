const http = require("http");

const server = http.createServer((req, res) => {
  res.write(`THIS IS NEW RESPOSNE UPDATED ONE###$$#$#%$ and port is 3000`);
  res.end();
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
