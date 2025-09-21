const http = require("http");
//TODO - Use Employee Module here
const Employees = require("./modules/Employee");
console.log("Lab 03 -  NodeJs");

//TODO - Fix any errors you found working with lab exercise

//Define Server Port
const port = process.env.PORT || 3000;

//Create Web Server using CORE API
const server = http.createServer((req, res) => {
  if (req.method !== "GET") {
    res.end(`{"error": "${http.STATUS_CODES[405]}"}`);
  } else {
    if (req.url === "/") {
      //TODO - Display message "<h1>Welcome to Lab Exercise 03</h1>"
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");
      res.end("<h1>Welcome to Lab Exercise 03</h1>");
      return;
    }

    if (req.url === "/employees") {
      //TODO - Display all details for employees in JSON format
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      const employees = Employees.getAllEmployees();
      res.end(JSON.stringify(employees));
      return;
    }

    if (req.url === "/employee/names") {
      //TODO - Display only all employees {first name + lastname} in Ascending order in JSON Array
      //e.g. [ "Ash Lee", "Mac Mohan", "Pritesh Patel"]
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/plain");
      const employeeNames = Employees.getEmployeesFullName();
      res.end(JSON.stringify(employeeNames));
      return;
    }

    if (req.url === "/employee/totalsalary") {
      //TODO - Display Sum of all employees salary in given JSON format
      //e.g. { "total_salary" : 100 }.
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      const totalSalary = Employees.getTotalSalary();
      res.end(JSON.stringify({ total_salary: totalSalary }));
      return;
    }
  }
  res.end(`{"error": "${http.STATUS_CODES[404]}"}`);
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
