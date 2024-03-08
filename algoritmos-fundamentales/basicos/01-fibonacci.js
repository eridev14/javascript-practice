//1.  fibonacci

function fibinacci(n) {
    let a = 0;
    let b = 1;
    for (let i = 0; i < n; i++) {
        let aux = a + b;
        b = a;
        a = aux
        console.log(a);
    }
    return a
}

console.log(fibinacci(4));

