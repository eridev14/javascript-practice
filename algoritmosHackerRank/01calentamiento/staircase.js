function staircase(n) {
    // Write your code here
    let lader = ""
    if (!(n > 0 && n <= 100)) return

    for (let i = 0; i < n; i++) {
        let vacio = " ".repeat(n - 1 - i);
        let lad = "#".repeat(i + 1)
        lader += vacio + lad + "\n";
    }
    console.log(lader);
}

staircase(5)