/**
 * Dado un tiempo enformato de hora AM/PM , conviértalo a hora militar (24 horas).
 * Nota: - 12:00:00 AM en un reloj de 12 horas es 00:00:00 en un reloj de 24 horas.
 * - 12:00:00 PM en un reloj de 12 horas es 12:00:00 en un reloj de 24 horas 
 */

function timeConversion(s) {
    let timeDim = s.slice(-2);

    let [horas, minutos, segundos] = s.slice(0, -2).split(":");
    let horasNum = +horas;

    if (horasNum === 12 && timeDim === "AM") {
        horasNum = 0;
    }

    if (horasNum < 12 && timeDim === "PM") {
        horasNum += 12;
    }

    console.log(`${horasNum.toString().padStart(2, '0')}:${minutos}:${segundos}`);
}

timeConversion("04:01:00AM");