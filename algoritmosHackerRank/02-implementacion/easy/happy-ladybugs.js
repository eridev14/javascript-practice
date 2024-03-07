function happyLadybugs(b) {
    let bNew = b.replaceAll('_', '');
    let arr = bNew.split('');

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

//------------------
//otra solucion

function happyLadybugsO(b) {
    let arr = b.split('');

    if (b.includes('_')) {
        let obj = {};

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] !== '_') {
                obj[arr[i]] = (obj[arr[i]] || 0) + 1;
            }
        }

        if (Object.values(obj).some(count => count === 1)) {
            return 'NO';
        }
    } else {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] !== arr[i + 1] && arr[i] !== arr[i - 1]) {
                return 'NO';
            }
        }
    }

    return 'YES';
}

//------------------


//----------------
//otra solucion 
function happyLadybugsOt(b) {
    const freq = {};
    const arr = b.split('');

    for (const char of arr) {
        if (char !== '_') {
            freq[char] = (freq[char] || 0) + 1;
        }
    }

    const hasSingle = Object.values(freq).some(count => count === 1);
    const isHappy = arr.every((char, index) => char === '_' || char === arr[index - 1] || char === arr[index + 1]);

    return hasSingle ? 'NO' : isHappy ? 'YES' : 'NO';
}

//----------------



