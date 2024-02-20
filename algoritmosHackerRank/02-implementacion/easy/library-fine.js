function libraryFine(d1, m1, y1, d2, m2, y2) {
    // Write your code here
    let lateD = d1 - d2;
    let lateM = m1 - m2;
    let lateY = y1 - y2;
    console.log(lateD);
    console.log(lateM);
    console.log(lateY);
    let fine = 0;
    if (((y1 <= y2) || (d1 <= d2)) || lateD <= 0) {
        fine = 0;
    }

    if (lateM === 0 && lateY === 0 && lateD > 0) {
        fine = 15 * lateD;
    }

    if (lateM > 0 && lateY === 0) {
        fine = 500 * lateM;
    }

    if (lateY > 0) {
        fine = 10000;
    }
    return fine;
}


console.log(libraryFine(28, 4, 2014, 15, 4, 2015));