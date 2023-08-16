function getTotalX(a, b) {
    
    if(a.length < 1 && b.length >10) return
    if(!a.every(val=>val>=1 && val <=100)) return 
    if(!b.every(val=>val>=1 && val <=100)) return 

    let ultPrim = a.slice(-1);
    let primSec = b[0];
    let cont = 0;

    for (let i = ultPrim; i <= primSec; i++) {
        if (a.every(val => i % val === 0) && b.every(val => val % i === 0)) {
            cont++;
        }
    }
    return cont;
}

console.log(getTotalX([2, 4], [16, 32, 96]));