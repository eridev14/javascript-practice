function processData(input) {
    //Enter your code here
    let string = input.split("\n");
    let valor = +string.at(0);
    if (!(2 <= valor <= 10000)) return

    let newString = string.slice(1);

    let str1 = "";
    newString.forEach(val => {
        let strPar = "";
        let strImpar = "";

        for (let i = 0; i < val.length; i++) {
            if (i % 2 === 0) {
                strPar += val.at(i)
            } else {
                strImpar += val.at(i)
            }
        }
        str1 += strPar + " " + strImpar + "\n";
    });
    console.log(str1);
}

processData("2\nHacker\nRank");
