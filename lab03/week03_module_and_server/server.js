const http = require("http");
const Students = require("./modules/student");

const SERVER_PORT = 3000;
const SERVER_HOST = "localhost";

const server = http.createServer((req, res) => {
  console.log(`Request received: ${req.method} - ${req.url}`);

  if (req.method === "GET" && req.url === "/") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.write("<h1>Welcome to the Node.js server!</h1>");
  } else if (req.method === "GET" && req.url === "/about") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.write("<h2>About</h2><p>This is a simple Node.js server</p>");
  } else if (req.method === "GET" && req.url === "/api/students") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    const students = Students.getAllStudents();
    res.write(JSON.stringify(students));
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain");
    res.write("404 Not Found!\n");
  }
  res.end();
});

server.listen(SERVER_PORT, SERVER_HOST, () => {
  console.log(`Server is running at http://${SERVER_HOST}:${SERVER_PORT}`);
});
