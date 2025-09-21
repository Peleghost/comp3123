const students = [
  { id: 1, name: "Alice", age: 20 },
  { id: 2, name: "Bob", age: 22 },
  { id: 3, name: "Charlie", age: 23 },
  { id: 4, name: "David", age: 21 },
];

exports.getAllStudents = () => {
  return students;
};

exports.getStudentById = (id) => {
  return students.find((student) => student.id == id);
};

exports.addStudent = (student) => {
  students.push(student);
};
