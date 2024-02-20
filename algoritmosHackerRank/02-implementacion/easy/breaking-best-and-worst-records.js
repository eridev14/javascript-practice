function breakingRecords(scores) {
    if (!(scores.length >= 1 && scores.length <= 1000)) return
    if (!scores.every(val => val >= 0 && val <= 10 ** 8)) return

    let highest = scores[0];
    let lowest = scores[0];
    let contHigh = 0;
    let contLower = 0;
    scores.forEach(score => {
        if (score > highest) {
            highest = score;
            contHigh++;
        } else if (score < lowest) {
            lowest = score;
            contLower++;
        }
    });

    return [contHigh, contLower]
}

console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]));