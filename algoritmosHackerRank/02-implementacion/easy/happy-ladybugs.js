function happyLadybugs(b) {
    let bNew = b.replaceAll('_', '');
    console.log(bNew);
    let arr = bNew.split('');
    console.log(arr);

    if (b.includes('_')) {
        let obj = {};
        for (let i = 0; i < arr.length; i++) {
            if (obj[arr[i]]) {
                obj[arr[i]]++;
            } else {
                obj[arr[i]] = 1;
            }
        }
        console.log(obj);

        if (Object.values(obj).includes(1)) {
            return 'NO'
        }
    } else {
        let c = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === arr[i + 1]) {
                c++;
            } else {
                if (c > 0) {
                    c = 0;
                } else {
                    return 'NO'
                }
            }
        }
    }

    return 'YES'
}

console.log(happyLadybugs('AABCBC'));

