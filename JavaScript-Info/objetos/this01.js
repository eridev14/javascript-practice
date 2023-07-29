// function makeUser() {
//     console.log(this);
//     return {
//         name: "John",
//         ref: this.name
//     };
// }

// let user = makeUser();

// console.log(user.ref.name); 


// function makeUser() {
//     console.log(this);
//     return this; // esta vez no hay objeto literal
// }

// console.log(makeUser().name); 


// function makeUser() {
//     return {
//       name: "John",
//       ref() {
//         return this;
//       }
//     };
//   }

//   let user = makeUser();

//   console.log( user.ref().name ); // John


let o = { f: function () { return this.a + this.b; } };
let p = Object.assign(o);
p.a = 1;
p.b = 4;

console.log(o.f());
console.log(Object.getPrototypeOf(p));
console.log(p.f()); // 5



