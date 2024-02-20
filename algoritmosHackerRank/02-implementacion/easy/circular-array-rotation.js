function circularArrayRotation(a, k, queries) {
    let aux = 0;
    for (let i = 0; i < k; i++) {
        let back = 0;
        for (let j = 0; j < a.length; j++) {
            if (j === 0) {
                back = a[j];
                a[j] = a[a.length - 1];
                continue;
            }
            aux = a[j];
            a[j] = back;
            back = aux;
        };
    }

    const result = [];
    queries.forEach(el => {
        result.push(a[el]);
    });

    return result;
}

function circularArrayRotationGPT(a, k, queries) {
    const n = a.length;
    k = k % n;
    const rotatedArray = [...a.slice(n - k), ...a.slice(0, n - k)];

    const result = queries.map(query => rotatedArray[query]);
    return result;
}

console.log(circularArrayRotation([3, 4, 5], 2, [1, 2]));
console.log(circularArrayRotationGPT([3, 4, 5], 2, [1, 2]));