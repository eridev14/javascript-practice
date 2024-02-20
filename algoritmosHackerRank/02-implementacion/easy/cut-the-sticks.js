function cutTheSticks(arr) {
    const result = [];
    while (arr.length > 0) {
        let min = Math.min(...arr);
        console.log(min);
        result.push(arr.length)
        arr = arr.filter(val => {
            let newV = val - min;
            return newV > 0;
        })

        console.log(arr);
    }

    return result
}

console.log(cutTheSticks([1, 2, 3, 4, 3, 3, 2, 1]));