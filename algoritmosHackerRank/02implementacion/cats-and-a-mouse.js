function catAndMouse(x, y, z) {
    let catA = Math.abs(z - x);
    let catB = Math.abs(z - y);

    // if (catA === catB) {
    //     return "Mouse C";
    // } else if (catB < catA) {
    //     return "Cat B";
    // } else {
    //     return "Cat A";
    // }

    return catA === catB ? "Mouse C" : catB < catA ? "Cat B" : "Cat A";
}

catAndMouse(1, 3, 2)