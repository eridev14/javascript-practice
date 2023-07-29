let obj1 = {
    name: "Erik"
};

let obj2 = {
    name: "Tatiana"
};

console.log(obj1);

console.log(obj1 + obj2 + "erik");
console.log(obj1 - obj2);
console.log(obj1 * obj2);
console.log(obj1 / obj2);

//los objetos se convierten automáticamente en valores primitivos

//todos los obj son true
let obj3 = {}

console.log(Boolean(obj1));
console.log(Boolean(obj3));

//conversion a string

// salida
let obj4 = {}
let anotherObj = {}
console.log(obj4);

// utilizando un objeto como clave
anotherObj[obj4] = 123;
console.log(anotherObj);



//CONVERSION NUMERICA
// conversión explícita
let num = Number(obj4);
console.log(num);

// matemáticas (excepto + binario)
let n = +obj4; // + unario
console.log(n);
// let delta = date1 - date2;

// comparación menor que / mayor que
// let greater = user1 > user2;

//symbol.toPrimitive

let user5 = {
    name: "John",
    money: 1000,

    [Symbol.toPrimitive](hint) {
        console.log(`sugerencia: ${hint}`);
        return hint == "string" ? `{name: "${this.name}"}` : this.money;
    }
};

// demostración de conversiones:
console.log(user5); // sugerencia: string -> {name: "John"}
console.log(+user5); // sugerencia: number -> 1000
console.log(user5 + 500); // sugerencia: default -> 1500