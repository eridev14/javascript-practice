//ejer 01, convertir el pirmer caracter en mayuscula

function ucFirst(str) {
    if (!str) return str;
    console.log(str[0]);
    console.log(str.slice(1));

    return str[0].toUpperCase() + str.slice(1);
}

console.log(ucFirst("john")); // John

//ejer02, Escribe una función checkSpam(str) que devuelva true si str contiene ‘viagra’ o ‘XXX’, de lo contrario false.

function checkSpam(str) {
    let st = str.toLowerCase()

    return (st.includes("viagra") || st.includes("xxx"))
}

console.log(checkSpam("XXX"));


//ejer 03
