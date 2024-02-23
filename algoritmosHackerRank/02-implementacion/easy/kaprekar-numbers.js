function kaprekarNumbers(p, q) {
    let kaprekars = '';
    for (let i = p; i <= q; i++) {
        let num = i;
        num = num * num;
        num = num + '';
        let num1 = num.slice(0, (num.length / 2));
        let num2 = num.slice((num.length / 2));

        if ((+num1 + +num2) === i) {
            let num = +num1 + +num2
            kaprekars += num + ' ';
        }
    }
    if (kaprekars) {
        console.log(kaprekars);
    } else {
        console.log('INVALID RANGE');
    }
}

kaprekarNumbers(1, 100);