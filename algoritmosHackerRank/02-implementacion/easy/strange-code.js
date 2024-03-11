function strangeCounter(t) {
    let cycleStart = 1;
    let value = 3;

    while (cycleStart <= t) {
        cycleStart += value;
        value *= 2;
    }

    return cycleStart - t;
}

console.log(strangeCounter(24));
