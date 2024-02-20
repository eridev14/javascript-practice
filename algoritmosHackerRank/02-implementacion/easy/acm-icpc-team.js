function acmTeam(topic) {
    const length = topic.length;
    let maxCount = 0;
    let teamCount = 0;

    for (let i = 0; i < length - 1; i++) {
        for (let j = i + 1; j < length; j++) {
            let count = 0;

            for (let k = 0; k < topic[i].length; k++) {
                // Utilizar operador bitwise OR para verificar si hay al menos un '1'
                if ((topic[i][k] === '1') | (topic[j][k] === '1')) {
                    count++;
                }
            }

            if (count > maxCount) {
                maxCount = count;
                teamCount = 1;  // Reiniciar el recuento del equipo
            } else if (count === maxCount) {
                teamCount++;  // Incrementar el recuento del equipo
            }
        }
    }

    return [maxCount, teamCount];
}

console.log(acmTeam(['10101', '11100', '11010', '00101']));