function jumpingOnClouds(c) {
    // Write your code here
    let cont = 0;
    let i = 0;
    while (i < c.length - 1) {
        console.log(i);
        if (c[i + 2] === 0) {
            i = i + 2
        } else {
            i++;
        }
        cont++;
        console.log(cont);
    }
    return cont
}

console.log(jumpingOnClouds([0, 0, 0, 0, 1, 0]));