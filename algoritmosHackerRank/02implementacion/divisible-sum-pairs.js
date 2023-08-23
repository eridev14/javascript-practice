function divisibleSumPairs(n, k, ar) {
    if (!(n >= 2 && n <= 100)) return
    if (!(k >= 1 && k <= 100)) return
    if (!ar.every(val => val >= 1 && val <= 100)) return

    let cont = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            let dif = ar[i] + ar[j];
            if (dif % k === 0) {
                cont++;
            }
        }
    }

    return cont
}

console.log(divisibleSumPairs(6, 5, [1, 2, 3, 4, 5, 6]));