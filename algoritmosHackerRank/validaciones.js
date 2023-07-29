export function todosEnRango(valores, rangoMin, rangoMax) {
    return valores.every(numero => numero >= rangoMin && numero <= rangoMax);
}


console.log(todosEnRango([100,12,14,5, 3], 0, 100));