function viralAdvertising(n) {
    let shared = 5;
    let like = 0;
    let acum = 0;
    for (let i = 1; i <= n; i++) {
        like = Math.floor(shared / 2);
        shared = like * 3;
        acum += like;
    }
    return acum;
}