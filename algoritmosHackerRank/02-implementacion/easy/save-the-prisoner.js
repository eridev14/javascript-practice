function saveThePrisoner(n, m, s) {
    // Write your code here
    let caramelo = 1;
    let pric = s;
    while (caramelo <= m) {
        if (pric <= n) {
            console.log("un caramelo");
            pric++;
            caramelo++;
        } else {
            pric = 1;
        }

    }
    return pric - 1;
}

function saveThePrisonerGPT(n, m, s) {
    const lastIndex = (s - 1 + m - 1) % n;
    return lastIndex + 1;
}

console.log(saveThePrisonerGPT(4, 6, 2));

