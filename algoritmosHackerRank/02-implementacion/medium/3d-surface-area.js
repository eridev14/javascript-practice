//inicio 25/04/2024, 09:39
//fin    02/05/2024, 10:03

function surfaceArea(A) {
    let back = 0;
    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < A[i].length; j++) {
            if (A[i][j] > 0) {
                back++;
            }
        }
    }

    let sideOne = 0;
    let sideTwo = 0;

    for (let i = 0; i < A.length; i++) {
        sideOne += A[i][0];
        for (let j = 1; j < A[i].length; j++) {
            if (A[i][j] > A[i][j - 1]) {
                sideOne += A[i][j] - A[i][j - 1];
            }
        }
    }

    for (let i = 0; i < A[0].length; i++) {
        sideTwo += A[0][i];

        for (let j = 1; j < A.length; j++) {
            if (A[j][i] > A[j - 1][i]) {
                sideTwo += A[j][i] - A[j - 1][i]
            }
        }
    }

    //optional
    // no es necesario sumar el comienzo de cada fila despues de cada 
    // iteracion
    // for (let i = 0; i < A.length; i++) {
    //     sideOne += A[i][0];
    //     sideTwo += A[0][i];
    // }
    
    // for (let i = 0; i < A.length; i++) {
    //     for (let j = 1; j < A[i].length; j++) {
    //         sideOne += Math.max(0, A[i][j] - A[i][j - 1]);
    //         sideTwo += Math.max(0, A[j][i] - A[j - 1][i]);
    //     }
    // }

    return back * 2 + sideOne * 2 + sideTwo * 2;
}

const A = [
    [1, 3, 4],
    [2, 2, 3],
    [1, 2, 4]
];

console.log(surfaceArea(A));

