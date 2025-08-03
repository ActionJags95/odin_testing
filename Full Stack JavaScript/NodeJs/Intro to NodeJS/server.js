import { createServer } from "node:http";

const server = createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end("<h1>Hello, World!</h1>");
});

server.listen(3000, "localhost", () => {
  console.log("Listening on port 3000!");
});
