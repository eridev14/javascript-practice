function howManyGames(p, d, m, s) {
    // Return the number of games you can buy
    let count = 0;
    let sum = p;
    while (sum <= s) {
        if (p - d > m) {
            p = p - d;
        } else {
            p = m;
        }
        count++;
        sum += p;
    }
    return count
}