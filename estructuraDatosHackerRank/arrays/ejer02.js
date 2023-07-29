/**
 * Hay relojes de arena en. Una suma de reloj de arena es la suma de los 
 * valores de un reloj de arena. Calcule la suma del reloj de arena para 
 * cada reloj de arena en, luego imprima la suma máxima del reloj de arena. 
 * La matriz siempre será. */

function hourglassSum(arr) {
    if (!validarMatriz) {
        return
    }

    let n = 0;

    let newarr = [];
    for (let i = 0; i < arr.length - 2; i++) {
        for (let j = 0; j < arr.length - 2; j++) {
            const submatriz = obtenerSubmatriz(arr, i, i + 2, j, j + 2);
            console.log(submatriz);
            let sum = sumarRelojArena(submatriz);
            console.log(sum);
            newarr[n++] = sum;
        }
    }
    let may = mayorNum(newarr);
    return may;
}

function mayorNum(matriz) {
    return matriz.sort((a, b) => a - b).pop();
}

function validarMatriz(matriz) {
    // Verificar tamaño de la matriz
    if (matriz.length > 6) return false;

    for (let i = 0; i < 6; i++) {
        // Verificar tamaño de cada fila
        if (matriz[i].length > 6) return false;


        for (let j = 0; j < 6; j++) {
            // Verificar rango de valores
            if (matriz[i][j] < -9 || matriz[i][j] > 9) return false;
        }
    }

    return true;
}

const matrizMayor = [
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 2, 4, 4, 0],
    [0, 0, 0, 2, 0, 0],
    [0, 0, 1, 2, 4, 0]
];

hourglassSum(matrizMayor);



// Función para obtener la submatriz
function obtenerSubmatriz(matriz, inicioFila, finFila, inicioColumna, finColumna) {
    return matriz.slice(inicioFila, finFila + 1).map(fila => fila.slice(inicioColumna, finColumna + 1));
}


function sumarRelojArena(matriz) {
    if (matriz.length !== 3 || matriz[0].length !== 3) {
        throw new Error('La matriz debe ser de tamaño 3x3');
    }

    let suma = 0;

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {

            if (i === 0 || i === 2) {
                suma += matriz[i][j];
            }

            if (i === 1 && j === 1) {
                suma += matriz[i][j];
            }

        }
    }
    console.log(suma);

    return suma;
}
