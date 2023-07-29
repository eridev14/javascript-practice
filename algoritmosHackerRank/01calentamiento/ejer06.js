function birthdayCakeCandles(candles) {
    let a = false;
    candles.forEach(el => {
        if (!(el >= 1 && el <= 10 ** 7)) a = true;
        if (!(candles.length >= 1 && candles.length <= 10 ** 5)) a = true
    });
    if (a) {
        return
    }
    let may = candles.sort((a, b) => a - b).at(-1);
    let cont = candles.filter(item => item === may);
    return cont.length
}

birthdayCakeCandles([3, 1, 2, 3])