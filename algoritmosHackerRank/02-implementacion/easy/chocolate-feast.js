function chocolateFeast(n, c, m) {
    let cantCho = Math.floor(n / c);
    let count = cantCho;

    while (cantCho >= m) {
        let chocolate = Math.floor(cantCho / m);
        count += chocolate;
        cantCho = cantCho - (m * chocolate) + chocolate;
    }

    return (count);
}

console.log(chocolateFeast(6, 2, 2));