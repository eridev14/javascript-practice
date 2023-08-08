function gradingStudents(grades) {
    if (!(grades.length >= 1 && grades.length <= 60)) {
        return
    }

    if (!grades.every(valor => valor >= 0 && valor <= 100)) {
        return
    }

    const newGrades = grades.map(val => {
        let sigMultiplo = val + (5 - val % 5);
        let dif = sigMultiplo - val;

        if (val < 38) {
            return val;
        }

        if (dif < 3) {
            val = sigMultiplo;
        }
        return val;
    })

    return newGrades;

}