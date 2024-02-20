function kangaroo(x1, v1, x2, v2) {
    //x1 = -1
    //x2 = 6
    //v1 = 4
    //v2 = 2
    if (!(0 <= x1 < x2 <= 10000)) return;
    if (!(v1 >= 1 && v1 <= 10000)) return;
    if (!(v2 >= 1 && v2 <= 10000)) return;


    while (x1 < x2 && v1 > v2) {
        x1 = x1 + v1;
        x2 = x2 + v2;
    }

    if (x1 === x2) {
        return "YES"
    }

    return "NO"

}

console.log(kangaroo(5, 3, 2, 4));
