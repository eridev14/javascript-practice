function repeatedString(s, n) {
    if (s === "a") return n;

    let str = s;
    while (str.length <= n) {
        console.log(str);
        str += s;
    }
    str = str.slice(0, n)
    console.log(str);
    return str.replace(/[^a]/g, '').length
}

function repeatedString(s, n) {
    const length = s.length;
    const repeated = Math.floor(n / length);
    const remainder = n % length;

    let count = (s.split('a').length - 1) * repeated;

    for (let i = 0; i < remainder; i++) {
        if (s.charAt(i) === 'a') {
            count++;
        }
    }

    return count;
}

function repeatedString(s, n) {
    const countAsInString = s.split('a').length - 1;
    const repeated = Math.floor(n / s.length);
    const remainder = n % s.length;

    const count = countAsInString * repeated
        + (s.slice(0, remainder).split('a').length - 1);

    return count;
}


console.log(repeatedString("babbaaaaabbbbbbbababbasdasdasdasaaaaad", 8747));
