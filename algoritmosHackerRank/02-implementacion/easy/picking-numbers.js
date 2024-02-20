function pickingNumbers(s) {
    // Write your code here
    const arrays = [];
    let finds = [...new Set(s)].sort((a, b) => a - b);
    console.log(finds);
    let a = 0;
    let b = 1;
    if (finds.length === 1) {
        return s.length;
    }
    while (finds.length > 0) {
        let valA = finds[a];
        let valB = finds[b];
        let modArr = [];
        if ((Math.abs(valB - valA) <= 1)) {
            let newArr = s.filter(val => (val === valA || val === valB));
            modArr = finds.slice(2);
            console.log(modArr);
            arrays.push(newArr);
        } else {
            modArr = finds.slice(1);
            console.log(modArr);
        }
        finds = modArr;
    }
    console.log(arrays.map(val => val.length));
    return Math.max(...arrays.map(val => val.length))
}

function pickingNumbersGPT(s) {
    const subArrays = [];
    const uniqueValues = [...new Set(s)].sort((a, b) => a - b);

    if (uniqueValues.length === 1) {
        return s.length;
    }

    while (uniqueValues.length > 1) {
        const valA = uniqueValues[0];
        const valB = uniqueValues[1];
        const validSubArray = s.filter(val => Math.abs(val - valA) <= 1);
        subArrays.push(validSubArray);
        uniqueValues.shift();
    }

    const maxLength = Math.max(...subArrays.map(subArr => subArr.length));
    return maxLength;
}

function pickingNumbersS(a) {
    let counter = 0
    let max = 0
    for (let i of a) {
        for (let j of a) {
            if (j - i == 1 || i == j) counter++
        }
        if (counter > max) max = counter
        counter = 0
    }

    return max
}

function pickingNumbersGPTT(s) {
    const sortedArray = s.sort((a, b) => a - b);
    let maxLength = 0;

    for (let i = 0; i < sortedArray.length; i++) {
        let currentLength = 1;

        for (let j = i + 1; j < sortedArray.length; j++) {
            if (Math.abs(sortedArray[j] - sortedArray[i]) <= 1) {
                currentLength++;
            } else {
                break;
            }
        }

        maxLength = Math.max(maxLength, currentLength);
    }

    return maxLength;
}


console.log(pickingNumbersGPT([4, 97, 5, 97, 97, 4, 97, 4, 97, 97, 97, 97, 4, 4, 5, 5, 97, 5, 97, 99, 4, 97, 5, 97, 97, 97, 5, 5, 97, 4, 5, 97, 97, 5, 97, 4, 97, 5, 4, 4, 97, 5, 5, 5, 4, 97, 97, 4, 97, 5, 4, 4, 97, 97, 97, 5, 5, 97, 4, 97, 97, 5, 4, 97, 97, 4, 97, 97, 97, 5, 4, 4, 97, 4, 4, 97, 5, 97, 97, 97, 97, 4, 97, 5, 97, 5, 4, 97, 4, 5, 97, 97, 5, 97, 5, 97, 5, 97, 97, 97]));

console.log(pickingNumbers([4, 97, 5, 97, 97, 4, 97, 4, 97, 97, 97, 97, 4, 4, 5, 5, 97, 5, 97, 99, 4, 97, 5, 97, 97, 97, 5, 5, 97, 4, 5, 97, 97, 5, 97, 4, 97, 5, 4, 4, 97, 5, 5, 5, 4, 97, 97, 4, 97, 5, 4, 4, 97, 97, 97, 5, 5, 97, 4, 97, 97, 5, 4, 97, 97, 4, 97, 97, 97, 5, 4, 4, 97, 4, 4, 97, 5, 97, 97, 97, 97, 4, 97, 5, 97, 5, 4, 97, 4, 5, 97, 97, 5, 97, 5, 97, 5, 97, 97, 97]));

console.log(pickingNumbersS([4, 97, 5, 97, 97, 4, 97, 4, 97, 97, 97, 97, 4, 4, 5, 5, 97, 5, 97, 99, 4, 97, 5, 97, 97, 97, 5, 5, 97, 4, 5, 97, 97, 5, 97, 4, 97, 5, 4, 4, 97, 5, 5, 5, 4, 97, 97, 4, 97, 5, 4, 4, 97, 97, 97, 5, 5, 97, 4, 97, 97, 5, 4, 97, 97, 4, 97, 97, 97, 5, 4, 4, 97, 4, 4, 97, 5, 97, 97, 97, 97, 4, 97, 5, 97, 5, 4, 97, 4, 5, 97, 97, 5, 97, 5, 97, 5, 97, 97, 97]));

console.log(pickingNumbersGPTT([4, 97, 5, 97, 97, 4, 97, 4, 97, 97, 97, 97, 4, 4, 5, 5, 97, 5, 97, 99, 4, 97, 5, 97, 97, 97, 5, 5, 97, 4, 5, 97, 97, 5, 97, 4, 97, 5, 4, 4, 97, 5, 5, 5, 4, 97, 97, 4, 97, 5, 4, 4, 97, 97, 97, 5, 5, 97, 4, 97, 97, 5, 4, 97, 97, 4, 97, 97, 97, 5, 4, 4, 97, 4, 4, 97, 5, 97, 97, 97, 97, 4, 97, 5, 97, 5, 4, 97, 4, 5, 97, 97, 5, 97, 5, 97, 5, 97, 97, 97]));

