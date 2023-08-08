function mult(n) {
    if (!(2 <= n <= 20)) {
        return
    }
    for (let i = 1; i <= 10; i++) {
        console.log(n + "*" + i + "=" + n * i + "\n");
    }
}

mult(2);