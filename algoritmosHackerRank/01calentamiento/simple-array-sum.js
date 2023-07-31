function simpleArraySum(ar) {
    if (!(ar.length > 0 && ar.length <= 1000)) return
    if (!ar.every(val => val > 0 && val <= 1000)) return
    return ar.reduce((ac, a) => ac + a, 0)
}


let arr = [1, 2, 3, 4, 10, 11];

console.log(simpleArraySum(arr));