function plusMinus(arr) {
    // Write your code here
    let len = arr.length;
    let pos = 0, neg = 0, cer = 0;
    if (len <= 0 && len > 100) return
    if (!arr.every(el => el >= -100 && el <= 100)) return

    arr.forEach(val => {
        if (val > 0) {
            pos++
        } else if (val < 0) {
            neg++;
        } else {
            cer++
        }
    });


    console.log((pos / len).toFixed(6));
    console.log((neg / len).toFixed(6));
    console.log((cer / len).toFixed(6));

}


plusMinus([-4, 3, -9, 0, 4, 1]);