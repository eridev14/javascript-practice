function cavityMap(grid) {
    // Write your code here
    for (let i = 1; i < grid.length - 1; i++) {
        for (let j = 1; j < grid[i].length - 1; j++) {
            let pos = grid[i][j];
            if (
                pos > grid[i + 1][j] &&
                pos > grid[i - 1][j] &&
                pos > grid[i][j + 1] &&
                pos > grid[i][j - 1]
            ) {
                grid[i] = grid[i].slice(0, j) + 'X' + grid[i].slice(j + 1)
            }
        }
    }

    return grid;
}

console.log(cavityMap(['1112', '1912', '1892', '1234']));