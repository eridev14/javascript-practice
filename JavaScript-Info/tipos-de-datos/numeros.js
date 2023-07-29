//azucar sintactica

let billon = 1000000000;
let billon1 = 1_000_000_000;

let billone = 1e9;
console.log(billone);

//heaxadecimales, binarios y octales

console.log(0xff);
console.log(0b11111);
console.log(0o377);

//toString(base)
let num = 255;

console.log(typeof num.toString());  // ff
console.log(num.toString());  // ff
console.log(num.toString(32));   // 
// dos puntos
console.log(123456..toString(36)); // 2n9c


//redondeo
let num2 = 3.45514;
console.log(Math.floor(num2));
console.log(Math.ceil(num2));
console.log(Math.round(num2));
console.log(Math.trunc(num2));

//redondeo personalizado
let num3 = 12.34;
console.log(num3.toFixed(1)); // "12.3"

//  CALCULO IMPRECISO
console.log(1e500); // Infinity

console.log(0.1 + 0.2 == 0.3); // false
console.log(0.1 + 0.2);
console.log(0.1.toFixed(17));

console.log(9999999999999999);

//isFinite e isNaN

console.log(isNaN(NaN)); // true
console.log(isNaN("str")); // true

console.log(isFinite("15")); // true
console.log(isFinite("str")); // false, porque es un valor especial: NaN
console.log(isFinite(Infinity)); // false, porque es un valor especial: Infinity


//parseInt y parseFloat

console.log(parseInt('100px')); // 100
console.log(parseFloat('12.5em')); // 12.5

console.log(parseInt('12.3')); // 12, devuelve solo la parte entera
console.log(parseFloat('12.3.4')); // 12.3, el segundo punto detiene la lectura


console.log(parseInt('a123')); // NaN, el primer símbolo detiene la lectura

//El segundo argumento de parseInt(str, radix)

console.log(parseInt('0xff', 16)); // 255
console.log(parseInt('ff', 16)); // 255, sin 0x también funciona
console.log(parseInt('2n9c', 36)); // 123456

//Math.random() Devuelve un número aleatorio entre 0 y 1 (no incluyendo 1)

console.log(Math.random() * 100);

//Math.max y Math.min

let arr = [1, 2, 3, 4, 5]
console.log(...arr);
console.log(Math.max(...arr));
console.log(Math.min(...arr));

//Math.pow(n,power)

console.log(Math.pow(2, 10));

//ejercicios

let i = 0;
while (i < 11) {
    i += 0.2;
    if (i > 9.8 && i < 10.2) console.log(i);
}

//ejer033

function random(min, max) {
    return min + Math.random() * (max - min);
  }
  
  console.log( random(1, 5) );
  console.log( random(1, 5) );
  console.log( random(1, 5) );