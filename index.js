
// 1. Task: Array Filtering and Mapping
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

console.log('Array Filtering and Mapping',getMaleNames(people));

// 2. Task: Object Manipulation - Get Book Titles
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

console.log('Object Manipulation - Get Book Titles',getBookTitles(books));


// 3. Task: Sorting Cars by Year

const cars = [
  { make: "Toyota", model: "Corolla", year: 2015 },
  { make: "Honda", model: "Civic", year: 2012 },
  { make: "Tesla", model: "Model 3", year: 2021 },
];

const sortCarsByYear=(carArray) =>{
    const shortingArray = carArray.sort((a, b) => a.year - b.year);
  return shortingArray
}

console.log('Sorting Cars by Year',sortCarsByYear(cars));


//4. Task: Unique Values from Array
const numbers = [1, 2, 2, 3, 4, 4, 5];

const  getUniqueValues =(arr)=> {
    const uniqueValue = [...new Set(arr)];
  return uniqueValue;
}

console.log('Unique Values from Array',getUniqueValues(numbers));

//5. Task: Find Maximum Value in Array
const values = [10, 25, 17, 99, 56];

const  getMaxValue =(arr)=> {
    const maxValues = Math.max(...arr);
  return maxValues;
}

console.log('Find Maximum Value in Array',getMaxValue(values));

//6. Task: Advanced Sorting – Students by Average Grade

const students = [
  { name: "Ashiq", grades: [85, 90, 80] },
  { name: "Tamim", grades: [95, 92, 88] },
  { name: "Rahman", grades: [70, 75, 72] },
];

const sortByAverage =(studentsArray) =>{

    const stuGradeAvg = studentsArray.sort((a, b) => {
    const avgA = a.grades.reduce((sum, g) => sum + g, 0) 
    const avgB = b.grades.reduce((sum, g) => sum + g, 0) 
    return avgB - avgA;
  });

  return stuGradeAvg;
}

console.log('Advanced Sorting Students by Average Grade',sortByAverage(students));

