// function formingMagicSquare(s) {

//     let paresDiagonal = [2, 4, 6, 8];
//     let imparesReactas = [1, 3, 7, 9];

//     let cost = 0;

//     if (isCuadraticMagic(s)) {
//         return cost
//     }

//     for (let i = 0; i < s.length; i++) {
//         for (let j = 0; j < s[i].length; j++) {
//             if ((i === 1 && j === 1)) {
//                 cost += Math.abs(5 - s[i][j]);
//                 s[i][j] = 5;
//                 break;
//             }
//         }
//     }

//     const matDiagoanls = structuredClone(s);
//     for (let i = 0; i < matDiagoanls.length; i++) {
//         for (let j = 0; j < matDiagoanls[i].length; j++) {
//             if ((i === 0 || i === matDiagoanls.length - 1) && (j === 0 || j === matDiagoanls[i].length - 1)) {
//                 let val = matDiagoanls[i][j];

//             }

//             if (isDiagonalPricipalMagic(matDiagoanls) &&
//                 ((i === 0 && j === 0) || (i === matDiagoanls.length - 1 && j === matDiagoanls[i].length - 1))) {
//                 let val = matDiagoanls[i][j];
//                 if (val % 2 === 1) {
//                     console.log(val)
//                 }
//             }

//             if ((i === 0 && j === matDiagoanls[i].length - 1) || (j === 0 && i === matDiagoanls.length - 1)) {
//                 let val = matDiagoanls[i][j];
//                 if (val % 2 === 1) {
//                     console.log(val)
//                 }
//             }

//         }

//     }

//     return cost
// }


// function getFaultM(mat) {
//     const foult = [];
//     const matS = [].concat(...mat);
//     for (let i = 1; i <= 9; i++) {
//         if (!matS.some(val => val === i)) {
//             foult.push(i);
//         }
//     }
//     return foult;
// }

// function isCuadraticMagic(s) {

//     let fils = false;
//     let cols = false;

//     //suma filas 
//     let contFils = 0;
//     for (let i = 0; i < s.length; i++) {
//         let sumFils = s[i].reduce((ac, val) => ac + val, 0);

//         if (sumFils === 15) {
//             contFils++;
//         }
//     }

//     fils = (contFils === 3);

//     //suma colums
//     let contColums = 0;
//     for (let i = 0; i < s.length; i++) {
//         let sumColums = 0;
//         for (let j = 0; j < s[i].length; j++) {
//             sumColums += s[j][i];
//         }

//         if (sumColums === 15) {
//             contColums++;
//         }
//     }

//     cols = contColums === 3;

//     return isDiagonalMagic(s) && fils && cols;
// }

// function isDiagonalMagic(s) {
//     return isDiagonalPricipalMagic(s) && isDiagonalSecondaryMagic(s);
// }

// function isDiagonalPricipalMagic(s) {
//     let diagP = false;
//     let sumDiagP = 0;

//     //diagonal principal
//     for (let i = 0; i < s.length; i++) {
//         for (let j = 0; j < s[i].length; j++) {
//             if (i === j) {
//                 sumDiagP += s[i][j];
//             }
//         }
//     }

//     diagP = (sumDiagP === 15);
//     return diagP;
// }

// function isDiagonalSecondaryMagic(s) {
//     let diagS = false;
//     let sumDiagS = 0;

//     //diagonal secunadaril
//     for (let i = 0; i < s.length; i++) {
//         sumDiagS += s[i][s[0].length - 1 - i];
//     }

//     diagS = (sumDiagS === 15);
//     return diagS
// }

function formingMagicSquare(s) {
    const magicSquares = [
        [[2, 7, 6], [9, 5, 1], [4, 3, 8]],
        [[4, 9, 2], [3, 5, 7], [8, 1, 6]],
        [[8, 1, 6], [3, 5, 7], [4, 9, 2]],
        [[6, 1, 8], [7, 5, 3], [2, 9, 4]],
        [[8, 3, 4], [1, 5, 9], [6, 7, 2]],
        [[4, 3, 8], [9, 5, 1], [2, 7, 6]],
        [[6, 7, 2], [1, 5, 9], [8, 3, 4]],
        [[2, 9, 4], [7, 5, 3], [6, 1, 8]],
    ];


    let minCost = Infinity;

    for (const magicSquare of magicSquares) {
        let cost = 0;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                cost += Math.abs(s[i][j] - magicSquare[i][j]);
                console.log(s[i][j]);
            }
        }

        console.log(cost);
        
        if (cost < minCost) {
            minCost = cost;
        }
    }

    return minCost;
}

// Ejemplo de uso
const inputMatrix = [
    [5, 3, 4],
    [1, 5, 8],
    [6, 4, 2]
];

const result = formingMagicSquare(inputMatrix);
console.log(result); // Imprime el costo mínimo


// otra solucion

// function isMagicSquare(matrix) {
//     // Verifica si la matriz es un cuadrado mágico
//     // Implementa la lógica para verificar si la suma de filas, columnas y diagonales es igual
// }

// function formingMagicSquareGPT(s) {
//     const permutations = []; // Almacena todas las permutaciones posibles de una matriz 3x3

//     // Genera todas las permutaciones posibles de una matriz 3x3
//     // Esto es un enfoque de fuerza bruta y no es eficiente para matrices grandes
//     function generatePermutations(matrix, row, col) {
//         if (row === 3) {
//             if (isMagicSquare(matrix)) {
//                 permutations.push(matrix.map(row => [...row]));
//             }
//             return;
//         }

//         for (let num = 1; num <= 9; num++) {
//             if (!matrix.flat().includes(num)) {
//                 matrix[row][col] = num;
//                 if (col === 2) {
//                     generatePermutations(matrix, row + 1, 0);
//                 } else {
//                     generatePermutations(matrix, row, col + 1);
//                 }
//                 matrix[row][col] = 0;
//             }
//         }
//     }

//     // Inicializa una matriz 3x3 con ceros
//     const emptyMatrix = Array.from({ length: 3 }, () => Array(3).fill(0));

//     // Genera todas las permutaciones posibles
//     generatePermutations(emptyMatrix, 0, 0);

//     let minCost = Infinity;

//     // Calcula el costo mínimo para convertir la matriz dada en cada permutación
//     for (const permutation of permutations) {
//         let cost = 0;
//         for (let i = 0; i < 3; i++) {
//             for (let j = 0; j < 3; j++) {
//                 cost += Math.abs(s[i][j] - permutation[i][j]);
//             }
//         }
//         minCost = Math.min(minCost, cost);
//     }

//     return minCost;
// }

// // Ejemplo de uso
// const inputMatrixs = [
//     [5, 3, 4],
//     [1, 5, 8],
//     [6, 4, 2]
// ];

// const results = formingMagicSquare(inputMatrixs);
// console.log(result); // Imprime el costo mínimo


