function timeConversion(s) {
    // Write your code here
    let dat = s.slice(-2);
    let [hrs, min, sec] = s.slice(0, -2).split(":")
    let hrsN = +hrs;

    if (dat === "AM" && hrsN === 12) {
        hrsN = 0;
        return `${hrsN}0:${min}:${sec}`;
    } else if (dat === "AM" && hrsN > 1) {
        return `0${hrsN}:${min}:${sec}`;
    }


    if (dat === "PM" && hrsN < 12) {
        hrsN += 12
        return `${hrsN}:${min}:${sec}`;
    } else if (dat === "PM" && hrsN === 12) {
        return `${hrsN}:${min}:${sec}`;
    }

    return "no valido";
}

console.log(timeConversion("12:45:54PM"));
