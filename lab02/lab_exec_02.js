// ----------------------------------
// COMP3123 Full Stack Development 1
// Lab Exercise 02
// Author: Fellipe C.T De Camargo
// GBC Id: 101497831
// ----------------------------------

//
// Exercise 1
//
const greeter = (myArray) => {
  const greetText = "Hello";

  for (const name of myArray) {
    console.log(`${greetText} ${name}`);
  }
};

console.log("----- Exercise 1 -----");
console.log(greeter(["Randy Savage", "Rick Flair", "Hulk Hogan"]));

//
// Exercise 2
//
const capitalize = ([first, ...rest]) => first.toUpperCase() + rest.join("");

console.log("----- Exercise 2 -----");
console.log(capitalize("fooBar"));
console.log(capitalize("nodeJs"));

//
// Exercise 3
//
const colors = ["red", "green", "blue"];
const capitalizedColors = colors.map((color) => capitalize(color));

console.log("----- Exercise 3 -----");
console.log(capitalizedColors);

//
// Exercise 4
//
var values = [1, 60, 34, 30, 20, 5];
const filteredNums = values.filter((num) => num < 20);

console.log("----- Exercise 4 -----");
console.log(filteredNums);

//
// Exercise 5
//
var array = [1, 2, 3, 4];
const calculateSum = array.reduce((prev, curr) => prev + curr, 0);
const calculateProduct = array.reduce((prev, curr) => prev * curr, 1);

console.log("----- Exercise 5 -----");
console.log(calculateSum);
console.log(calculateProduct);

//
// Exercise 6
//
class Car {
  constructor(model, year) {
    this.model = model;
    this.year = year;
  }

  details() {
    console.log(`Model: ${this.model}, Year: ${this.year}`);
  }
}

class Sedan extends Car {
  constructor(model, year, balance) {
    super(model, year);
    this.balance = balance;
  }

  info() {
    console.log(`${this.model} ${this.year}, has a balance of ${this.balance}`);
  }
}

const car = new Car("Pontiac Firebird", 1976);
const sedan = new Sedan("Volvo SD", 2018, 30000);

console.log("----- Exercise 6 -----");
console.log(car.details());
console.log(sedan.info());
