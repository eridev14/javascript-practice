function designerPdfViewer(h, word) {
    // Write your code here
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const tam = [];
    for (let ind of word) {
        let i = alphabet.indexOf(ind);
        tam.push(h[i]);
    }

    return Math.max(...tam) * word.length;
}

var numeros = [1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5];

console.log(designerPdfViewer(numeros, "abc"));