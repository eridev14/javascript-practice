function compareTriplets(a, b) {
    if (!(a.every(elem => elem >= 1 && elem <= 100))) return
    if (!(b.every(elem => elem >= 1 && elem <= 100))) return
    let puntosAlice = 0
    let puntosBob = 0
    a.forEach((_, i) => {
        if (a[i] > b[i]) puntosAlice++;
        if (a[i] < b[i]) puntosBob++;
    });

    return [puntosAlice, puntosBob]
}


let a = [17, 28, 30]
let b = [99, 16, 8]

console.log(compareTriplets(a, b));