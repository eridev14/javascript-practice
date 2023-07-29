// apples y oranges

// s - t
//d - distancia caida fruto
// const log = console.log;
//1<=s,t,a,b,m,n <=10^5
//a<s<t<b

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let dm = apples.length;
    let dn = oranges.length;
    let iManzano = 0;
    let iNaranjo = 0;
    if (![s, t, a, b, dm, dn].every(val => val >= 1 && val <= 10 ** 5)) {
        return
    }

    if (!(dm >= -(10 ** 5) && dm <= 10 ** 5)) {
        return
    }

    if (!(dn >= -(10 ** 5) && dn <= 10 ** 5)) {
        return
    }

    if (!(a < s && s < t && t < b)) {
        return
    }

    apples.map(m => a + m).forEach(ma => {
        (ma >= s && ma <= t) ? iManzano++ : null;
    });

    oranges.map(m => b + m).forEach(na => {
        (na >= s && na <= t) ? iNaranjo++ : null;
    });

    console.log(iManzano + "\n" + iNaranjo);

}

countApplesAndOranges(5, 10, 4, 12, [2, 3], [3, -2, -4]);