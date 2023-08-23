function birthday(s, d, m) {
    if (!(1 <= s.length <= 100)) return;
    if (!s.every(val => val >= 1 && val <= 5)) return
    if (!(1 <= d <= 31)) return
    if (!(1 <= m <= 12)) return

    let cont = 0;
    for (let i = 0; i < s.length - m; i++) {
        let el = 0;
        for (let j = 0; j < m; j++) {
            el += s[i + j];
        }

        if (el === d) {
            cont++
        }
    }
    return cont;
}

let s = [1, 2, 1, 3, 2]
console.log(birthday(s, 3, 2));

