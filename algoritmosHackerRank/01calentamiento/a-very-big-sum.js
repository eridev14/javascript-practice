
function aVeryBigSum(ar) {

    if (!(ar.length >= 1 && ar.length <= 10)) return
    if (!ar.every(val => val >= 0 && val <= (10 ** 10))) return

    return ar.reduce((ac, val) => ac + val, 0);
}

let arr = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];

console.log(aVeryBigSum(arr));