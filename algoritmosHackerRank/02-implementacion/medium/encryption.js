function encryption(s) {
    s = s.split(' ').join('');
    let leng = s.length;
    let lengFirst = Math.floor(Math.sqrt(leng));
    let lengSecond = Math.ceil(Math.sqrt(leng));

    if (lengFirst * lengSecond < leng) {
        lengFirst++;
    }

    let dif = lengFirst * lengSecond - leng;
    s = s + ' '.repeat(dif)

    let encrypt = '';
    let start = 0;
    for (let i = 0; i < lengSecond; i++) {
        start = i;
        let str = ''
        for (let j = 0; j < lengFirst; j++) {
            str += s[start];
            start += lengSecond;
        }
        encrypt += str.trim() + ' ';
    }

    return encrypt;
}

console.log(encryption('chillout'));