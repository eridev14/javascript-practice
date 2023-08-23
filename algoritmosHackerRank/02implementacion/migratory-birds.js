function migratoryBirds(arr) {
    let j = 1;
    const typeBirds = new Array(5).fill(0);
    for (let i = 0; i < 5; i++) {
        typeBirds[i] = arr.filter(val => val === j).length;
        j++;
    }

    return typeBirds.indexOf(Math.max(...typeBirds)) + 1
}

console.log(migratoryBirds([1, 4, 4, 4, 5, 3]));


//chatGPT soluction

function migratoryBirdsGPT(arr) {
    const birdCounts = [0, 0, 0, 0, 0, 0]; // Índices 1 a 5

    arr.forEach(birdType => {
        birdCounts[birdType]++;
    });

    const maxCount = Math.max(...birdCounts);
    const mostCommonBirdType = birdCounts.indexOf(maxCount);

    return mostCommonBirdType + 1;
}

console.log(migratoryBirdsGPT([1, 4, 4, 4, 5, 3]));

