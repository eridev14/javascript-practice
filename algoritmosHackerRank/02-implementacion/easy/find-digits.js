function findDigits(n) {
    // Write your code here
    let nn = n;
    let cant = 0;
    while (n > 0) {
        let dig = parseInt(n % 10);
        if (nn % dig === 0) cant++;
        n = parseInt(n / 10);
    }
    return cant;
}


console.log(findDigits(124));