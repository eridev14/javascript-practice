
function angryProfessor(k, a) {
    let arrival = 0;
    for (const ind of a) {
        if (ind <= 0) {
            arrival++;
        }
    }
    return (arrival >= k) ? "NO" : "YES"
}
