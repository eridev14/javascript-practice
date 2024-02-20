function climbingLeaderboard(ranked, player) {
    const rankedTwo = [...ranked];
    const points = [];
    for (const play of player) {
        rankedTwo.push(play);
        rankedTwo.sort((a, b) => b - a)
        let pointRanked = draw(rankedTwo);
        let point = pointRanked.filter(val => val.rank === play)
        console.log(point);
        let posit = point.map(val => val.position)
        console.log(posit);
        points.push(...posit);
    }

    console.log(Array.from(new Set(points)));
    return Array.from(new Set(points));

}

function draw(rankedTwo) {
    let ranks = [];
    let pos = 1;
    rankedTwo.forEach((rank, id) => {
        ranks[id] = { rank: rank, position: pos };

        if (rankedTwo[id] === rankedTwo[id + 1]) {
            return;
        } else {
            pos++;
            return;
        }
    })
    return ranks
}

//otra solucion

function climbingLeaderboardGPT(ranked, player) {
    const uniqueRanked = [...new Set(ranked)];
    const points = [];

    for (const play of player) {
        uniqueRanked.push(play);
        uniqueRanked.sort((a, b) => b - a);

        let pointRanked = draw(uniqueRanked);
        let point = pointRanked.find(val => val.rank === play);
        console.log(point);

        if (point) {
            points.push(point.position);
        }
    }

    console.log(points);
    return points;
}

function draw(uniqueRanked) {
    let ranks = [];
    let pos = 1;

    for (let i = 0; i < uniqueRanked.length; i++) {
        ranks[i] = { rank: uniqueRanked[i], position: pos };

        if (i < uniqueRanked.length - 1 && uniqueRanked[i] !== uniqueRanked[i + 1]) {
            pos++;
        }
    }

    return ranks;
}


//optimizado

function climbingLeaderboardOP(ranked, player) {
    const uniqueRanked = [...new Set(ranked)];
    uniqueRanked.sort((a, b) => b - a);

    const points = [];

    for (const play of player) {
        while (uniqueRanked.length > 0 && play >= uniqueRanked[uniqueRanked.length - 1]) {
            uniqueRanked.pop();
        }

        const position = uniqueRanked.length + 1;
        points.push(position);
    }

    console.log(points);
    return points;
}

climbingLeaderboardOP([100, 90, 90, 80, 75, 60], [50, 65, 77, 90, 102]);


climbingLeaderboard([100, 90, 90, 80, 75, 60], [50, 65, 77, 90, 102]);


climbingLeaderboardGPT([100, 90, 90, 80, 75, 60], [50, 65, 77, 90, 102])