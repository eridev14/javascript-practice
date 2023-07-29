

const solveMeFirst = (a, b) => {
    function todosEnRango(valores, rangoMin, rangoMax) {
        return valores.every(numero => numero >= rangoMin && numero <= rangoMax);
    }

    if (!todosEnRango([a, b], 1, 1000)) return
    return a + b;
}
console.log(solveMeFirst(3, 7));
