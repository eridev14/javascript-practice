function fairRations(B) {
    // Write your code here
    let countPan = 0;
    for (let i = 0; i < B.length - 1; i++) {
        if (B[i] % 2 === 1) {
            B[i]++;
            B[i + 1]++;
            countPan += 2;
        }
    }

    return (B.every(val => val % 2 === 0)) ? countPan : 'NO';
}

console.log(fairRations([2, 3, 4, 5, 6]));