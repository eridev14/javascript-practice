/**Invertir una matriz de enteros.. */

function reverseArray(a) {
    let fin = a.length - 1
    for (let i = 0; i < Math.floor(a.length / 2); i++) {
        let aux = a[i];
        a[i] = a[fin];
        a[fin] = aux;
        fin--;
    }

    return a;
}

console.log(reverseArray([1, 5, 4, 71, 5]));

// tambien se puede usar return a.reverse();