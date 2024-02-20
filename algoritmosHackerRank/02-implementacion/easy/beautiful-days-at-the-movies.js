function beautifulDays(i, j, k) {
    let days = 0;
    for (; i <= j; i++) {
        let abs = Math.abs(i - invert(i));
        if (abs % k === 0) {
            days++;
        }
    }

    return days;
}

function invert(n) {
    let inv = 0;
    while (n > 0) {
        let dig = n % 10;
        inv = inv * 10 + dig;
        n = Math.floor(n / 10);
    }
    return (parseInt(inv.toString(), 10));
}


console.log(beautifulDays(20, 23, 6));