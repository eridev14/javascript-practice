function queensAttack(n, k, r_q, c_q, obstacles) {
    const direccions = [
        [1, 1], [1, 0], [1, -1], [0, 1],
        [-1, -1], [-1, 0], [-1, 1], [1, 0]
    ]

    
}

console.log(queensAttack(5, 5, 4, 4, [[1, 2], [3, 4], [5, 4]]));


// function queensAttack(n, k, r_q, c_q, obstacles) {
//     // Write your code here

//     const direccions = [
//         [1, 1], [1, 0], [1, -1], [0, 1],
//         [-1, -1], [-1, 0], [-1, 1], [1, 0]
//     ]

//     let count = 0;
//     let chess = Array.from({ length: n }, () => Array.from({ length: n }).fill('*'))
//     drawTable(chess, n, k, r_q, c_q, 'R')

//     for (const obs of obstacles) {
//         let [f, c] = obs;
//         drawTable(chess, n, k, f, c, "X")
//     }



//     showTable(chess);

//     let bool = true;

//     function PosQueen() {
//         this.f = r_q - 1;
//         this.c = c_q - 1;
//         this.done = false;
//     }

//     let matSec1 = new PosQueen();
//     console.log(matSec1);

//     while (matSec1.f !== null) {
//         let fil = matSec1.c + 1
//         let col = matSec1.f - 1
//     }

//     return count;
// }

// function drawTable(chess, n, k, r, c, simbol) {
//     for (let i = 0; i < n; i++) {
//         let fil = n - i;
//         for (let j = 0; j < n; j++) {
//             let col = j + 1;
//             if (fil === r && col === c) {
//                 chess[i][j] = simbol;
//             }
//         }
//     }
// }

// function showTable(chess) {
//     for (const item of chess) {
//         console.log(item.join(' '));
//     }
// }


