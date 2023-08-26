function hourglass(arr) {
    const arrClock = [];
    for (let i = 0; i < arr.length - 2; i++) {
        for (let j = 0; j < arr.length - 2; j++) {
            let ar = getWatch(i, j, arr);
            let sum = sumArr(ar);
            arrClock.push(sum);
        }
    }

    console.log(Math.max(...arrClock));
}

const matrix = [
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 2, 4, 4, 0],
    [0, 0, 0, 2, 0, 0],
    [0, 0, 1, 2, 4, 0]
];

hourglass(matrix);

function getWatch(posI, posJ, arr) {
    const newArr = [];
    let a = 0;
    for (let i = posI; i < posI + 3; i++) {
        let b = 0;
        newArr[a] = [];
        for (let j = posJ; j < posJ + 3; j++) {
            newArr[a][b] = arr[i][j];
            b++;
        }
        a++;
    }

    return newArr;
}

//getWatch refactorizado por chatGPT
function getWatchGPT(posI, posJ, arr) {
    const newArr = [];

    for (let i = posI; i < posI + 3; i++) {
        const row = arr[i].slice(posJ, posJ + 3);
        newArr.push(row);
    }

    return newArr;
}


function sumArr(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (i === 1 && j !== 1) continue
            sum += arr[i][j];
        }
    }
    return sum;
}

//sumArr refactorizado por chatGPT
function sumArrGPT(arr) {
    return arr.reduce((sum, row, i) => {
        return sum + row.reduce((rowSum, val, j) => {
            if (i === 1 && j !== 1) return rowSum;
            return rowSum + val;
        }, 0);
    }, 0);
}
