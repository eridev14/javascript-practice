function conditional(n) {
    if (!(n >= 1 && n <= 100)) return

    if (n % 2 === 0) {
        if (n >= 2 && n <= 5) {
            console.log("Not Weird");
        } else if (n >= 6 && n <= 20) {
            console.log("Weird");
        } else if (n > 20) {
            console.log("Not Weird");
        }
    } else {
        console.log("Weird");
    }
}

conditional(3)