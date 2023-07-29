function minMaxSum(arr) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        if (!(arr[i] >= 1 && arr[i] <= 10 ** 9)) return
        for (let j = 0; j < arr.length; j++) {
            if (j !== i) {
                sum += arr[j];
            }
        }
        newArr.push(sum);
    }
    let ar = newArr.sort((a, b) => a - b);
    console.log(ar[0] + " " + ar[ar.length - 1]);
}
minMaxSum([5, 5, 5, 5, 5]);

