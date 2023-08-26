function binaryNumber(n) {
    if (!(n >= 1 && n <= 10 ** 6)) return
    let binary = n.toString(2);
    const binOne = binary.split("0");
    let may = Math.max(...binOne);
    console.log(may.toString().length);
}

binaryNumber(13);