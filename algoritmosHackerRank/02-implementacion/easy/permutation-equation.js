function permutationEquation(p) {
    // Write your code here
    const px = [];
    const py = [];
    for (let i = 1; i <= p.length; i++) {
        px.push(p.indexOf(i) + 1)
    }


    px.forEach(val => {
        py.push(p.indexOf(val)+1)
    })
    return py
}

function permutationEquationGPT(p) {
    const py = [];

    for (let i = 1; i <= p.length; i++) {
        const pxIndex = p.indexOf(i) + 1;
        const pyIndex = p.indexOf(pxIndex) + 1;
        py.push(pyIndex);
    }

    return py;
}

console.log(permutationEquationGPT([2, 3, 1]));


console.log(permutationEquation([2, 3, 1]));
