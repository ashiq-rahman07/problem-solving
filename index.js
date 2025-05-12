const people = [
  { name: "Ashiq", age: 22, gender: "male" },
  { name: "Nujaifa", age: 20, gender: "female" },
  { name: "Rahman", age: 25, gender: "male" },
  { name: "Yusra", age: 19, gender: "female" },
];

function getMaleNames(arr) {
  const males = arr.filter(person => person.gender !== "female");
  const names = males.map(person => person.name);
  return names;
}

console.log(getMaleNames(people));