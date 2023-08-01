function birthdayCakeCandles(candles) {
    // Write your code here
    if (candles.length <= 0 && candles.length > 10 ** 5) return
    if (!candles.every(el => el >= 1 && el <= 10 ** 7)) return

    let may = Math.max(...candles)

    return candles.filter(el => el === may).length
}

console.log(birthdayCakeCandles([3, 2, 1, 3]));