let person: (string| number) [] = ['Khang'];
let people = ['Khang', 27]; // type inference

person.push('Dao');

console.log("Check person: ", person);

person.push(27); // Error, have to define number type 

console.log("Check person: ", person);
