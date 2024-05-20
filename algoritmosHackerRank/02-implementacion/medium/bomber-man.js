//inicio: 20-05-2024 09:26
//fin 

function bomberMan(n, grid) {
    let setp = new Set();
    for (let i = 0; i < grid.length; i++) {
        let str = grid[i].split();
        for (let j = 0; j < str.length; j++) {
            console.log(grid[i][j]);
            if (grid[i][j] === 'O') {
                setp.add({ i, j });
            } else {
                grid[i][j] = 'O';
            }
        }
    }
    console.log(grid);

    setp.forEach(({ i, j }) => {
        console.log(i, j);
        if (i > grid.length && grid[i + 1][j]) grid[i + 1][j] = '.';
        if (i < 0 && grid[i - 1][j]) grid[i - 1][j] = '.';
        if (i > grid.length && grid[i][j + 1]) grid[i][j + 1] = '.';
        if (grid[i][j - 1]) grid[i][j - 1] = '.';
    })

    return grid;
}

const grid = ['.......', '...O...', '....O..', '.......', 'OO.....', 'OO....'];

console.log(bomberMan(3, grid));
