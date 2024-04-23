function gridSearch(G, P) {
    // Write your code here
    let indP = 0;
    let lenP = P.length;
    let j = 0;
    let found = false;
    let findIndex = true;
    let posArr = [];
    for (let i = 0; i < G.length - (lenP - 1); i++) {
        if (G[i].includes(P[indP])) {
            posArr.push(i);
            found = true;
        }
    }

    if (!found) return "NO";

    console.log(posArr);

    for (const it of posArr) {
        let posi = it;
        for (let j = 1; j < G.length; j++) {
            
        }
    }

    return found ? "YES" : "NO"
}

let valores = [
    "34889246430321978567",
    "58957542800420926643",
    "35502505614464308821",
    "14858224623252492823",
    "72509980920257761017",
    "22842014894387119401",
    "01112950562348692493",
    "16417403478999610594",
    "79426411112116726706",
    "65175742483779283052",
    "89078730337964397201",
    "13765228547239925167",
    "26113704444636815161",
    "25993216162800952044",
    "88796416233981756034",
    "14416627212117283516",
    "15248825304941012863",
    "88460496662793369385",
    "59727291023618867708",
    "19755940017808628326"
];

let valoresAdicionales = [
    "1641",
    "7942",
    "6517",
    "8907",
    "1376",
    "2691",
    "2599"
];

console.log(gridSearch(valores, valoresAdicionales));

