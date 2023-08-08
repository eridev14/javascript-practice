function invert(n, arr) {
    if (!(1 <= n <= 1000)) return
    if (!arr.every(val => val >= 1 && val <= 10000)) return
    console.log(arr.reverse().join(" "));
}

invert(5, [1, 2, 3, 4, 5]);