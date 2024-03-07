/**
 * Hay relojes de arena en. Una suma de reloj de arena es la suma de los 
 * valores de un reloj de arena. Calcule la suma del reloj de arena para 
 * cada reloj de arena en, luego imprima la suma máxima del reloj de arena. 
 * La matriz siempre será. */

function hourglassSum(arr) {
    let may = -Infinity;
    for (let i = 0; i < arr.length - 2; i++) {
        for (let j = 0; j < arr.length - 2; j++) {
            let sum = 0;
            for (let k = 0, fil = i; k < 3; k++, fil++) {
                if (k === 1) {
                    sum += arr[fil][j + 1]
                } else {
                    sum += arr[fil][j] + arr[fil][j + 1] + arr[fil][j + 2];
                }
            }

            if (sum > may) {
                may = sum;
            }
            console.log(sum);

        }
    }

    return may;
}


const matriz = [
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 9, 2, -4, -4, 0],
    [0, 0, 0, -2, 0, 0],
    [0, 0, -1, -2, -4, 0]
];

console.log(hourglassSum(matriz));

