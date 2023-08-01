function diagonalDifference(arr) {
    let a = 0;
    let b = arr.length - 1;
    let sumDiag1 = 0;
    let sumDiag2 = 0;

    arr.forEach((el, i) => {
        sumDiag1 += el[a];
        sumDiag2 += el[b];
        a++;
        b--;
    });

    return Math.abs(sumDiag1 - sumDiag2)
}

let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9]
];

console.log(diagonalDifference(matriz));

