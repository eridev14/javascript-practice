function equalizeArray(arr) {
    let cont = 0;
    const unique = {};
    for (const i of arr) {
        (unique[i]) ? unique[i]++ : unique[i] = 1
    }
    return arr.length - Math.max(...Object.values(unique))
}

console.log(equalizeArray([1, 2, 2, 3]));