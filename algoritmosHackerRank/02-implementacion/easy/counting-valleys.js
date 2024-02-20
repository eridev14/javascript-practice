function countingValleys(steps, path) {

    let valleys = 0;
    let stepPath = {
        step: 0,
        previousStep: 0
    };

    for (let i = 0; i < steps; i++) {

        if (path[i] === "U") {
            stepPath.previousStep = stepPath.step;
            stepPath.step++;
        }

        if (path[i] === "D") {
            stepPath.step--
        }

        if (stepPath.step === 0 && stepPath.previousStep === -1) {
            valleys++;
        }
    }

    return valleys;
}

function countingValleysGPT(steps, path) {
    let valleys = 0;
    let altitude = 0;

    for (let i = 0; i < steps; i++) {
        if (path[i] === "U") {
            altitude++;
        } else if (path[i] === "D") {
            altitude--;
        }

        if (path[i] === "U" && altitude === 0) {
            valleys++;
        }
    }

    return valleys;
}

console.log(countingValleys(12, "DDUUDDUDUUUD"));


console.log(countingValleysGPT(12, "DDUUDDUDUUUD"));