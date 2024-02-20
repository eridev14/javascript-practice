function dayOfProgrammer(year) {
    let day = 0;

    if (!(year >= 1700 && year <= 2700)) return

    if (year === 1918) {
        day = (256 - 243) + 13;
    } else if ((year >= 1700 && year <= 1917) && (year % 4 === 0)) {
        day = 256 - 244;
    } else if (year >= 1919 && (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0))) {
        day = 256 - 244;
    } else {
        day = 256 - 243;
    }
    let month = parseInt((256 / 30)) + 1;
    return `${day}.0${month}.${year}`
}

console.log(dayOfProgrammer(1918));