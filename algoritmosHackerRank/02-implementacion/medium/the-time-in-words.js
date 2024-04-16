function timeInWords(h, m) {
    const timeArray = [
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "quarter",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
        "twenty",
        "twenty one",
        "twenty two",
        "twenty three",
        "twenty four",
        "twenty five",
        "twenty six",
        "twenty seven",
        "twenty eight",
        "twenty nine",
        "half"
    ];


    if (m === 0) {
        return `${timeArray[h - 1]} o' clock`
    }

    if (m <= 30) {
        if (m === 15) {
            return `${timeArray[m - 1]} past ${timeArray[h - 1]}`
        }
        if (m === 30) {
            return `half past ${timeArray[h - 1]}`
        }
        return `${timeArray[m - 1]} ${m === 1 ? "minute" : minutes} past ${timeArray[h - 1]}`
    }

    let minUp = 60 - m;
    let houUp = h + 1;
    if (minUp === 15) {
        return `${timeArray[minUp - 1]} to ${timeArray[houUp - 1]}`
    }
    return `${timeArray[minUp - 1]} minutes to ${timeArray[houUp - 1]}`
}

console.log(timeInWords(1, 1));