function minMaxSum(arr) {
    if (!arr.every(num => num >= 1 && num <= 10 ** 9)) return;

    const sum = arr.reduce((acc, curr) => acc + curr, 0);
    const minSum = sum - Math.max(...arr);
    const maxSum = sum - Math.min(...arr);

    console.log(`${minSum} ${maxSum}`);
}

minMaxSum([1, 2, 3, 4, 5]);