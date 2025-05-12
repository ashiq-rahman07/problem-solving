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

// console.log(getMaleNames(people));


const books = [
  { title: "Marhava JS Maro Tabha", author: "Jhankar Mahbub", year: 2025 },
  { title: "JavaScript Basics", author: "John", year: 2018 },
  { title: "Learn React", author: "Maya", year: 2020 },
  { title: "Node Advanced", author: "Arif", year: 2021 },
];

const getBookTitles =(bookArray)=>{
    const newArray = bookArray.map(book => book.title);
  return newArray
}

// console.log(getBookTitles(books));


// Task: Sorting Cars by Year

const cars = [
  { make: "Toyota", model: "Corolla", year: 2015 },
  { make: "Honda", model: "Civic", year: 2012 },
  { make: "Tesla", model: "Model 3", year: 2021 },
];

const sortCarsByYear=(carArray) =>{
    const shortingArray = carArray.sort((a, b) => a.year - b.year);
  return shortingArray
}

console.log(sortCarsByYear(cars));