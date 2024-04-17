function gridSearch(G, P) {
    // Write your code here
    let firstP = P[0];
    let lenP = P[0].length;
    let j = 0;
    let found = false;
    let i = 0;
    for (i = 0; i < G[0].length - (lenP - 1); i++) {
        if (G[i].includes(firstP)) {
            found = true;
            j = G[i].indexOf(firstP);
            break;
        }
    }

    if (!found) return "NO"

    for (i = 0; i < G[0].length - (lenP - 1); i++) {
        
    }

    return "YES"
}
