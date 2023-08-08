function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here
    // let dm = apples.length;
    // let dn = oranges.length;
    // let iManzano = 0;
    // let iNaranjo = 0;
    // if (![s, t, a, b, dm, dn].every(val => val >= 1 && val <= 10 ** 5)) {
    //     return
    // }

    // if (!(dm >= -(10 ** 5) && dm <= 10 ** 5)) {
    //     return
    // }

    // if (!(dn >= -(10 ** 5) && dn <= 10 ** 5)) {
    //     return
    // }

    // if (!(a < s && s < t && t < b)) {
    //     return
    // }

    // apples.map(m => a + m).forEach(ma => {
    //     (ma >= s && ma <= t) ? iManzano++ : null;
    // });

    // oranges.map(m => b + m).forEach(na => {
    //     (na >= s && na <= t) ? iNaranjo++ : null;
    // });

    // console.log(iManzano + "\n" + iNaranjo);


    let validacion = [s, t, a, b, m.length, n.length];
    if (!validacion.every(val => val >= 1 && val <= 10 ** 5)) {
        return
    }
    //m=[1,-8,4] n=[2,-9]  [1,-8,4,2,-9]
    let distancias = [...m, ...n];
    if (!distancias.every(val => val >= (-10) ** 5 && val <= 10 ** 5)) {
        return
    }

    if (!(a < s < t < b)) {
        return
    }

    let contarManzanas = 0;
    let contarNaranjas = 0;

    const nuevasManzanas = m.map(val => val + a);
    const nuevasNaranjas = n.map(val => val + b);

    nuevasManzanas.forEach(val => {
        if (val >= s && val <= t) {
            contarManzanas++;
        }
    });

    nuevasNaranjas.forEach(val => {
        if (val >= s && val <= t) {
            contarNaranjas++;
        }
    });

    console.log(contarManzanas);
    console.log(contarNaranjas);
}