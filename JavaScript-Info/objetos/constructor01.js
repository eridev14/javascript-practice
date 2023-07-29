function User(name) {
    this.name = name;
    this.isAdmin = false;
    this.value = true;
}

let user = new User("Jack");
let user2 = new User("Erik");

console.log(user.name); // Jack
console.log(user.isAdmin); // false
console.log(user.value); // false


console.log(user2.name); // Jack
console.log(user2.isAdmin = true); // false
console.log(user2.value); // false

//return de constructores
//return con un objeto devuelve ese objeto, en todos los demás casos se devuelve this.

function BigUser() {

    this.name = "John";

    return { name: "Godzilla" };  // <-- devuelve este objeto
}

// lo mismo ()
let obj1 = new BigUser;
console.log(new BigUser().name);  // Godzilla, recibió ese objeto
console.log(obj1.name);  // Godzilla, recibió ese objeto


//metodos en los constructores

function User1(name) {
    this.name = name;

    this.sayHi = function () {
        console.log("Mi nombre es: " + this.name);
    };
}

let john = new User1("Erik");

john.sayHi(); // Mi nombre es: John

/*
john = {
   name: "John",
   sayHi: function() { ... }
}
*/

//Ejericcios 1
let obj = {}

function A() {
    return obj
}
function B() {
    return obj
}

let a = new A();
let b = new B();

console.log(a == b); // true

//Ejericicio 2

function Calculator() {
    this.read = function () {
        this.a = 5;
        this.b = 6;
    }

    this.sum = function () {
        return this.a + this.b;
    }

    this.mul = function () {
        return this.a * this.b;
    }
}

let calculator = new Calculator();
calculator.read();

console.log("Sum=" + calculator.sum());
console.log("Mul=" + calculator.mul());


