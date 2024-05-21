//inicio: 20-05-2024 09:26
//fin 

function bomberMan(n, grid) {
    for (let i = 0; i < grid.length; i++) {
        grid[i] = grid[i].split('');
    }
    let setp = new Set();

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 'O') {
                setp.add({ i, j });
            }
            grid[i][j] = 'O';
        }
    }

    setp.forEach(({ i, j }) => {
        if (grid[i + 1] && grid[i + 1][j]) grid[i + 1][j] = '.';
        if (grid[i - 1] && grid[i - 1][j]) grid[i - 1][j] = '.';
        if (grid[i] && grid[i][j + 1]) grid[i][j + 1] = '.';
        if (grid[i] && grid[i][j - 1]) grid[i][j - 1] = '.';
        grid[i][j] = '.';
    })

    return grid.map(val => val.join(''));
}

const grid = ['.......', '...O...', '....O..', '.......', 'OO.....', 'OO.....']

console.log(bomberMan(3, grid));
