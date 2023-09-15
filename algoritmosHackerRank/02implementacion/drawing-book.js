function pageCount(n, p) {
    let pagesOne = 0;
    let pagesTwo = 0;

    let i = 1;
    let j = n;
    while (i < p) {
        i += 2;
        pagesOne++;
    }

    if (j % 2 === 0) {
        while (j > p) {
            j -= 2;
            pagesTwo++;
        }
    } else {
        j -= 2;
        while (j >= p) {
            j -= 2;
            pagesTwo++;
        }
    }

    return pagesOne < pagesTwo ? pagesOne : pagesTwo;
}

function pageCountGPT(n, p) {
    const fromFront = Math.floor(p / 2);
    const fromBack = Math.floor((n / 2) - (p / 2));
    
    return Math.min(fromFront, fromBack);
}


console.log(pageCount(18183, 18042));

console.log(pageCountGPT(7, 4));
