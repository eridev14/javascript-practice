function getMoneySpent(keyboards, drives, b) {

    let price = -1;
    let may = 0;

    for (let i = 0; i < keyboards.length; i++) {

        for (let j = 0; j < drives.length; j++) {

            if (keyboards[i] + drives[j] > may && keyboards[i] + drives[j] < b) {
                may = keyboards[i] + drives[j];
                price = may;
            }

        }
    }

    return price;
}

function getMoneySpentGPT(keyboards, drives, b) {
    let price = -1;

    for (let i = 0; i < keyboards.length; i++) {
        for (let j = 0; j < drives.length; j++) {
            const currentPrice = keyboards[i] + drives[j];
            if (currentPrice <= b && currentPrice > price) {
                price = currentPrice;
            }
        }
    }

    return price;
}


console.log(getMoneySpent([3,1], [5,2,8], 10));
console.log(getMoneySpentGPT([3,1], [5,2,8], 10));

