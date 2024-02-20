function hurdleRace(k, height) {
    let may = Math.max(...height);
    return (k < may) ? may - k : 0
}

console.log(hurdleRace(4, [1, 6, 3, 5, 2]));