function gridSearch(G, P) {
    let lenP = P.length;
    let found = false;
    let posArr = [];
    for (let i = 0; i <= G.length - lenP; i++) {
        if (G[i].includes(P[0])) {
            let posj = G[i].indexOf(P[0]);
            console.log(posj);
            posArr.push({ posi: i, posj });
            found = true;
        }
    }

    if (!found) return "NO";

    console.log(posArr);

    let lenPi = P[0].length;
    for (let { posi, posj } of posArr) {
        posi = posi + 1;
        for (let i = 1; i < lenP; i++) {
            console.log(G[posi]);
            let getG = G[posi].slice(posj, lenPi + posj);
            console.log(getG);
            posi++;
            console.log(P[i]);

            if (getG !== P[i]) {
                return "NO"
            }
        }
    }

    return "YES"
}

let val = [
    "400453592126560",
    "114213133098692",
    "474386082879648",
    "522356951189169",
    "887109450487496",
    "252802633388782",
    "502771484966748",
    "075975207693780",
    "511799789562806",
    "404007454272504",
    "549043809916080",
    "962410809534811",
    "445893523733475",
    "768705303214174",
    "650629270887160"
];

let valAdi = [
    "99",
    "99"
];

console.log(gridSearch(val, valAdi));



//chat 

function gridSearch(G, P) {
    const lenP = P.length;
    const lenPi = P[0].length;

    for (let i = 0; i <= G.length - lenP; i++) {
        for (let j = 0; j <= G[i].length - lenPi; j++) {
            let found = true;
            for (let k = 0; k < lenP; k++) {
                if (G[i + k].substring(j, j + lenPi) !== P[k]) {
                    found = false;
                    break;
                }
            }
            if (found) return "YES";
        }
    }

    return "NO";
}

let valores = [
    "400453592126560",
    "114213133098692",
    "474386082879648",
    "522356951189169",
    "887109450487496",
    "252802633388782",
    "502771484966748",
    "075975207693780",
    "511799789562806",
    "404007454272504",
    "549043809916080",
    "962410809534811",
    "445893523733475",
    "768705303214174",
    "650629270887160"
];

let valoresAdicionales = [
    "99",
    "99"
];

console.log(gridSearch(valores, valoresAdicionales));
