function taumBday(b, w, bc, wc, z) {

    b = BigInt(b);
    w = BigInt(w);
    bc = BigInt(bc);
    wc = BigInt(wc);
    z = BigInt(z);
    
    if (bc > wc + z) {
        return BigInt((b * (wc + z)) + (w * wc))
    } else if (wc > bc + z) {
        return BigInt((b * bc) + (w * (bc + z)))
    } else {
        return BigInt((b * bc) + (w * wc))
    }
}

console.log(taumBday(742407782, 90529439, 847666641, 8651519, 821801924));