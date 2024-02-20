function nonDivisibleSubset(k, s) {
    let count = new Array(k).fill(0);

    for (let i of s) {
        let remainder = i % k;
        count[remainder]++;
    }

    let ans = Math.min(count[0], 1);

    if (k % 2 === 0) {
        ans += Math.min(count[Math.floor(k / 2)], 1);
    }

    for (let i = 1; i <= Math.floor(k / 2); i++) {
        if (i !== k - i) {
            ans += Math.max(count[i], count[k - i]);
        }
    }

    return ans;
}


console.log(nonDivisibleSubset(3, [1, 2, 3, 4, 5, 6]));