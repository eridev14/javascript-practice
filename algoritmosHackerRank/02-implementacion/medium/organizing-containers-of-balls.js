function organizingContainers(container) {
    let setBox = new Set();

    for (let i = 0; i < container.length; i++) {
        let sum = container[i].reduce((ac, val) => ac + val);
        setBox.add(sum);
    }

    for (let j = 0; j < container.length; j++) {
        let sumTypes = 0;
        for (let i = 0; i < container.length; i++) {
            sumTypes += container[i][j];
        }

        if(!setBox.has(sumTypes)){
            return 'Impossible'
        }

    }
    
    return 'Possible'
}

