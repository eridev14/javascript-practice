function queensAttack(n, k, r_q, c_q, obstacles) {
    const direccions = [
        [1, 0], [0, 1], [-1, 0], [0, -1],
        [1, 1], [1, -1], [-1, 1], [-1, -1]
    ];

    let count = 0;

    for (const dir of direccions) {
        let posR = r_q;
        let posC = c_q;

        w: while (true) {
            let [a, b] = dir;
            posR += a;
            posC += b;

            if ((posR <= 0 || posR > n) || (posC <= 0 || posC > n)) {
                break;
            }


            for (let i = 1; i <= k; i++) {
                let [x, y] = obstacles[i - 1];
                if (posR === x && posC === y) {
                    break w;
                }
            }
            console.log(count);

            count++;

        }

    }

    return count;

}

console.log(queensAttack(5, 3, 4, 3, [[5, 5], [4, 2], [2, 3]]));


