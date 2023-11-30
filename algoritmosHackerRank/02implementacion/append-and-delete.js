function appendAndDelete(s, t, k) {

    if (s === t) return "Yes";
    let pos = -1;

    for (let i = 0; (i < s.length || i < t.length); i++) {
        if (s[i] === t[i]) {
            continue;
        } else {
            pos = i;
            break;
        }
    }

    let subs = s.slice(pos);
    let subt = t.slice(pos);
    s = s.slice(0, pos) + subt

    return ((subs.length + subt.length) <= k) ? "Yes" : "No";
}


console.log(appendAndDelete("aba", "aba", 5));