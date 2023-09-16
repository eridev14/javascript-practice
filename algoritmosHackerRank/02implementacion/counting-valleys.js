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

        console.log(stepPath.step);
        console.log(stepPath.previousStep);

        if (stepPath.step === 0 && (stepPath.previousStep === -1)) {
            valleys++;
        }
    }
    
    return valleys;
}

console.log(countingValleys(12, "DDUUDDUDUUUD"));