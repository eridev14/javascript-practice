function workbook(n, k, arr) {
    let count = 0;
    let page = 1;
    let c = 1;

    for (const cap of arr) {
        for (let i = 1; i <= cap; i++) {

            if (c <= k) {
                c++
            } else {
                page++;
                c = 1;
                i = i - 1
            }

            if (i === page) {
                count++;
            }

        }
        page++;
        c = 1;
    }

    return count;
}


console.log(workbook(5, 3, [4, 2, 6, 1, 10]));

