//En este desafío, debe calcular e imprimir la suma de los elementos en una matriz, 
//teniendo en cuenta que algunos de esos números enteros pueden ser bastante grandes.

function aVeryBigSum(ar) {
    let sum = 0;let a = false;
    if (!(ar.length >= 1 && ar.length <= 10)) {
        return
    }

    for (let i = 0; i < ar.length; i++) {
        if(!(ar[i]>=0 && ar[i]<=(10**10))){
            a = true;
        }
    }

    if(a){
        return 
    }

    for (let i = 0; i < ar.length; i++) {
        sum += ar[i];
    }
    return sum;
}

let arr = [1000000001, 1000000002, 100000000003, 1000000004, 1000000005];

console.log(aVeryBigSum(arr));