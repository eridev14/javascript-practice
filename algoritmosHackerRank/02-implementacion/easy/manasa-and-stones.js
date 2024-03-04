function stones(n, a, b) {
    const combinaciones = new Set();

    // for (let i = 0; i < Math.pow(2, n - 1); i++) {
    //     let com = i.toString(2).padStart(n, '0').split('');
    //     let sum = 0;
    //     for (let j = 1; j < com.length; j++) {
    //         if (com[j] === '0') {
    //             sum += a
    //         } else {
    //             sum += b
    //         }
    //     }

    //     combinaciones.add(sum)

    // }

    for (let i = 0; i < n; i++) {
        let sum = i * b + (n - 1 - i) * a;
        combinaciones.add(sum);
    }

    const listaCombinaciones = Array.from(combinaciones).sort((a, b) => a - b);

    return listaCombinaciones;
}

const resultado = stones(4, 10, 100);
console.log(resultado);
