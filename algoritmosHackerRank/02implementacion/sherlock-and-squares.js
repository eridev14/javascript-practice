function squares(a, b) {
    // Write your code here
    let numA = Math.ceil(Math.sqrt(a));
    let numB = Math.floor(Math.sqrt(b));

    console.log(numA);
    console.log(numB);


    return numB - numA + 1;
}

console.log(squares(100, 1000));
