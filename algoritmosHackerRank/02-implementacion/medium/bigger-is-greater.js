function biggerIsGreater(w) {
    w = w.split("");

    let i = w.length - 2;
    while (i >= 0 && w[i] >= w[i + 1]) {
        i--;
    }

    if (i == -1) return "no answer";

    let j = w.length - 1;
    while (w[j] <= w[i]) {
        j--;
    }

    [w[i], w[j]] = [w[j], w[i]];

    w = [...w.slice(0, i + 1), ...w.slice(i + 1).reverse()];
    return w.join("");
}

let word = "1432";
console.log(biggerIsGreater(word));




