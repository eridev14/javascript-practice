
function serviceLane(n, width, cases) {
    let max = [];
    for (const val of cases) {
        let [a, b] = val;
        let w = width.slice(a, b + 1);
        max.push(Math.min(...w));
    }
    return max
}

console.log(serviceLane(5, [1, 2, 2, 2, 1], [[2, 3], [1, 4], [2, 4], [2, 4], [2, 3]]));