let id1 = Symbol("id");
let id2 = Symbol("id");

console.log(id1 == id2); // false

console.log(typeof id1);
console.log(typeof id1.toString());
console.log(id1.description);

//Claves ocultas

let user = { // pertenece a otro código
    name: "John"
};

let id = Symbol("id");

user[id] = "hola";

console.log(user[id]); // podemos accesar a la información utilizando el symbol como nombre de clave
console.log(user);
console.log(user.id);



//symbols en objetos
//debemos usar corchetes.

let id3 = Symbol("id");

let user2 = {
    name: "John",
    [id3]: 123 // no "id": 123
};


//Symbols omtidos en for in..

let id4 = Symbol("id");

let user4 = {
    name: "John",
    age: 30,
    [id4]: 123
};

for (let key in user4) console.log(key); // nombre, edad (no aparecen symbols)

// el acceso directo por medio de symbol funciona
console.log("Direct: " + user4[id4]); // Direct: 123

// Object.keys(user) también los ignora. *

// En contraste, Object.assign copia tanto las claves string como symbol: *

let id5 = Symbol("id5");

let user5 = {
    [id5]: 123
};

let clone = Object.assign({}, user5);

console.log(clone[id5]); // 123



//Symbols globales


// leer desde el registro global
let id6 = Symbol.for("id"); // si el símbolo no existe, se crea

// léelo nuevamente (tal vez de otra parte del código)
let idAgain = Symbol.for("id");

// el mismo symbol
console.log(id6 === idAgain); // true



//Symbol.for(key)
//Symbol.keyFor(sym)

// tomar symbol por nombre
let sym = Symbol.for("nombre");
let sym1 = Symbol.for("nombre");
let sym2 = Symbol.for("id");

// tomar name por symbol
console.log(Symbol.keyFor(sym1)); // nombre
console.log(Symbol.keyFor(sym2)); // id

// no funciona para los symbol que no están dentro del registro.

let globalSymbol = Symbol.for("nombre");
let localSymbol = Symbol("nombre");

console.log(Symbol.keyFor(globalSymbol)); // nombre, global symbol
console.log(Symbol.keyFor(localSymbol)); // undefined, no global

console.log(localSymbol.description); // nombre

