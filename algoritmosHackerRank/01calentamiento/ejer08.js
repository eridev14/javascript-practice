/**
 * Dada una matriz de enteros, calcule las proporciones de sus elementos que son positivos , 
 * negativos y cero . Imprime el valor decimal de cada fracción en una nueva línea conlugares 
 * después del decimal.
 */

function plusMinus(arr) {
    let pos = 0, neg = 0, cer = 0,cont=0;
    if (arr.length < 1 || arr.length > 100) return
    arr.forEach(el=>{
        if(!(el>=-100 && el<=100)) cont++
    })

    if(cont>=1) return

    arr.forEach(el => {
        
        if (el > 0) {
            pos++;
        } else if (el === 0) {
            cer++;
        } else {
            neg++;
        }
    });
    console.log((pos / arr.length).toFixed(6));
    console.log((neg / arr.length).toFixed(6));
    console.log((cer / arr.length).toFixed(6));
}

plusMinus([-4, 3, -9, 0, 4, 1001])