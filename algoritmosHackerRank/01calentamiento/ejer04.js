let n = 7;

function staircase(n) {
    let a = n - 1;
    let col = ""
    for (let i = 0; i < n; i++, a--) {
        for (let j = 0; j < n; j++) {
            if (j >= a) {
                col += "#"
            } else {
                col += " "
            }
        }
        console.log(col);
        col = "";
    }
}