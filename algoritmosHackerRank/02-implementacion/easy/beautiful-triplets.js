function beautifulTriplets(d, arr) {
    let count = 0;
    const n = arr.length;

    for (let j = 1; j < n - 1; j++) {
        const left = arr.slice(0, j);
        const right = arr.slice(j + 1);

        const leftCount = left.filter((num) => num + d === arr[j]).length;
        const rightCount = right.filter((num) => arr[j] + d === num).length;

        count += leftCount * rightCount;
    }

    return count;
}

console.log(beautifulTriplets(3, [1, 2, 4, 5, 7, 8, 10]));