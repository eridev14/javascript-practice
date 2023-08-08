function sumMult(sum, mult) {

    for (let x = 1; x <= sum; x++) {
        let y = sum - x;
        if (x * y === mult) {
            return { x, y };
        }
    }

    return null;
}

console.log(sumMult(12, 32));


//numMayor

function numMayor(a, b, c) {
    return Math.max(a, b, c);
}


//string mult

function strNum(s) {
    for (let i = 1; i <= 10; i++) {
        console.log(i * s.length);
    }
}

strNum("hola");
