function gradingStudents(grades) {
    let sig = null;
    let dif = 0;
    let a = false;

    grades.forEach(el => {
        if (!(el >= 0 && el <= 100)) a = true;
        if (!(grades.length >= 1 && grades.length <= 60)) a = true
    });

    if (a) {
        return
    }

    const res = [];

    grades.forEach(gr => {
        let i = gr;
        while (true) {
            if (i % 5 === 0) {
                sig = i;
                break;
            }
            i++;
        }


        dif = sig - gr;
        if (dif < 3 && sig >= 40){
            gr = sig;
            res.push(sig);
        }else{
            res.push(gr)
        }

    });

    return res;
}

console.log(gradingStudents([84,94,21,0,18,100,18,62,30,61,53,0,43,2,29,53,61,40,14]));

