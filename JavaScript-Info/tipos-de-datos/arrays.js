//metodos de arrays

let arr = ["Yo", "estudio", "JavaScript"];

arr.splice(1, 1); // desde el índice 1, remover 1 elemento
// arr.splice(start[, deleteCount, elem1, ..., elemN])

console.log(arr); // ["Yo", "JavaScript"]

let arr2 = ["Yo", "estudio", "JavaScript", "ahora", "mismo"];

// remueve los primeros 3 elementos y los reemplaza con otros
arr2.splice(0, 3, "a", "bailar");

console.log(arr2); // ahora ["a", "bailar", "ahora", "mismo"]