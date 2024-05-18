// inicio 03-05-2024 09:07
// fin 08-05-2024 11:58

function absolutePermutation(n, k) {
    if (k === 0) {
        return Array.from({ length: n }, (_, i) => i + 1);
    }

    if (n % (2 * k) !== 0) {
        return [-1];
    }

    let result = [];
    let add = true;

    for (let i = 1; i <= n; i++) {
        if (add) {
            result.push(i + k);
        } else {
            result.push(i - k);
        }

        if (i % k === 0) {
            add = !add;
        }
    }

    return result;
}



console.log(absolutePermutation(4, 1));
