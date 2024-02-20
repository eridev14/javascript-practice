function utopianTree(n) {
    let h = 0;
    for (let i = 0; i <= n; i++) {
        if (i % 2 === 0) {
            h++;
        } else {
            h *= 2;
        }
    }
    return h;
}

