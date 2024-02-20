function sockMerchant(n, ar) {
    let par = 0;
    let i = 0;
    let newArr = [...ar];

    while (i < newArr.length) {
        let val = newArr[i];
        let bool = false;
        for (let j = i + 1; j < newArr.length; j++) {
            if (val === newArr[j]) {
                newArr.splice(i, 1);
                newArr.splice(j - 1, 1);
                bool = true;
                par++;
                break;
            }
        }
        if (bool) {
            i = 0;
        } else {
            i++;
        }
    }
    return par
}

//refactorizada por chatGPT

function sockMerchantGPT(n, ar) {
    const sockCount = {};
    let pairs = 0;

    for (const sock of ar) {

        console.log(sock);
        console.log(sockCount);
        console.log(sockCount[sock]);
        //si existe aumenta + 1, sino inicializa en 1
        if (sockCount[sock]) {
            sockCount[sock]++;
        } else {
            sockCount[sock] = 1;
        }
        console.log(sockCount);

    }

    for (const count of Object.values(sockCount)) {
        console.log(count);
        pairs += Math.floor(count / 2);
    }

    return pairs;
}


console.log(sockMerchant(9, [10, 20, 10, 30, 20, 10, 50, 20, 10]));