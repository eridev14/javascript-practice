function flatlandSpaceStations(n, c) {
    let max = -Infinity;
    if (n === c.length - 1) return 0;

    for (let i = 0; i < n; i++) {
        let min = Infinity;
        for (let j = 0; j < c.length; j++) {
            let dif = Math.abs(c[j] - i);
            if (dif < min) {
                min = dif
            }
        }
        if (min > max) {
            max = min;
        }
    }

    return max;
}

console.log(flatlandSpaceStations(7, [1, 5]));

