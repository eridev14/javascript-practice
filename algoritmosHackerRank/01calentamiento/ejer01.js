//Alice and Bob
//Si a[i] > b[i] , Alice recibe 1 punto.
//Si a[i] < b[i], Bob recibe 1 punto.
//Si a[i] = b[i], entonces ninguna persona recibe un punto.

function compareTriplets(a, b) {
    let result = [0, 0];

    for (let i = 0; (i < a.length && i < b.length); i++) {
        if (((a[i] >= 1 && a[i] <= 100) && (b[i] >= 1 && b[i] <= 100)) && a[i] > b[i]) {
            result[0] += 1
        } else if (((a[i] >= 1 && a[i] <= 100) && (b[i] >= 1 && b[i] <= 100)) && a[i] < b[i]) {
            result[1] += 1
        }
    }

    return result;
}

let a = [17, 16, 100]
let b = [99, 16, 8]


console.log(compareTriplets(a, b));