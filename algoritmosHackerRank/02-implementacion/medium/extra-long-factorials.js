function extraLongFactorials(n) {
    // Write your code here
    let fact = BigInt(1);
    for (let i = BigInt(2); i <= BigInt(n); i++) {
        fact *= i;
    }

    return fact.toString();
}

console.log(extraLongFactorials(23));

