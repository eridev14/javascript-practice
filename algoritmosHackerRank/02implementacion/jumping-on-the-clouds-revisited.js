function jumpingOnClouds(c, k) {
    let n = c.length;
    console.log(n);
    let e = 100;
    let i = 0;
    let com = true;
    while (com) {
        if (c[(i + k) % n] === 1) e -= 2;
        e--;
        
        if ((i + k) % n === 0) com = false;
        
        i = i + k;
    }

    return e;
}

console.log(jumpingOnClouds([1, 1, 1, 0, 1, 1, 0, 0, 0, 0], 3));

