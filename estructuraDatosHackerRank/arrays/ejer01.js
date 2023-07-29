/**Invertir una matriz de enteros.. */

function reverseArray(a) {
    let al = false;

    a.forEach(el => {
        if (!(el >= 1 && el <= 10 ** 4)) al = true;
        if (!(a.length >= 1 && a.length <= 10 ** 3)) al = true;
        if (!(typeof el === "number")) al = true;
    });

    if (al) {
        return
    }

    return a.reverse();
}

console.log(reverseArray([1,5,4,71,5,10,1]));
