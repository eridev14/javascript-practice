function biggerIsGreater(w) {
    w = w.split(""); // Convertir la cadena en un arreglo de caracteres

    // Encontrar el índice del primer carácter que no sigue la secuencia descendente
    let i = w.length - 2;
    while (i >= 0 && w[i] >= w[i + 1]) {
        i--;
    }

    // Si i es -1, significa que la cadena está en orden descendente y no hay permutaciones más grandes posibles
    if (i == -1) {
        return "no answer";
    }

    // Encontrar el índice del siguiente carácter más grande que el carácter en la posición i
    let j = w.length - 1;
    while (w[j] <= w[i]) {
        j--;
    }

    // Intercambiar los caracteres en las posiciones i y j
    [w[i], w[j]] = [w[j], w[i]];

    console.log(w);

    // Revertir la parte de la cadena después de la posición i
    w = w.slice(0, i + 1).concat(w.slice(i + 1).reverse());

    // Unir el arreglo de caracteres para formar la cadena final
    return w.join("");
}

// Ejemplo de uso:
let word = "dkhc";
console.log(biggerIsGreater(word));  // Salida esperada: "acbd"
