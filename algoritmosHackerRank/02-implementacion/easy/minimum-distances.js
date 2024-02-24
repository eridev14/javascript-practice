function minimumDistances(a) {
    let arr = [];
    for (let i = 0; i < a.length; i++) {
        let ind = a.indexOf(a[i], i + 1);
        if (ind === -1) continue;
        let dif = Math.abs(ind - i);
        arr.push(dif)
    }
    if (!arr.length) return -1;

    return (Math.min(...arr));
}

console.log(minimumDistances([1, 2, 3, 4, 10]));


//refactorizado

function minimumDistances(a) {
    let values = {};
    for (let i = 0; i < a.length; i++) {
        if (values[a[i]]) {
            values[a[i]].indLast = i
        } else {
            values[a[i]] = {
                value: a[i],
                indFirst: i,
                indLast: 0
            }
        }
        console.log(values[a[i]]);


        console.log(values);

    }

    console.log(values);
}

console.log(minimumDistances([1, 2, 3, 4, 10]));