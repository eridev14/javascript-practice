function dynamicArray(n, queries) {
    let arr = Array.from({ length: n }, () => []);
    console.log(arr);
    let lastAnswer = 0;
    let r = [];
    queries.map((i, j) => {
        if (i[0] == 1) {
            arr[(i[1] ^ lastAnswer) % n].push(i[2]);
        } else {
            let idx = (i[1] ^ lastAnswer) % n
            lastAnswer = arr[idx][arr[2] % arr[idx].length];
            r.push(lastAnswer);
        }
    });
    return r;
}

const n = 2;
const queries = [
    [1, 0, 5],
    [1, 1, 10]
];

console.log(dynamicArray(n, queries));
const results = dynamicArray(n, queries);
console.log(results);