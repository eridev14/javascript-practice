//metodos de arrays

let arr = ["Yo", "estudio", "JavaScript", "ahora", "mismo", "JavaScript"];

//devuelven un nuevo array

console.log(arr.slice(0, 1));
console.log(arr.filter(el => el === "JavaScript"));
console.log(arr.map(el => el + 2));

let arr2 = [1, 2, 3];
let arr3 = [4, 5, 6]
console.log(arr.concat(arr2,arr3));



//mutan el array original
arr.splice(0, 3, "a", "bailar")
console.log(arr);
