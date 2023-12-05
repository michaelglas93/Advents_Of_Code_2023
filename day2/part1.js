const fs = require('fs');
const filePath = './day2/input.txt';

const getMaxPerColor = (sets, color) => {
    const re = new RegExp(`\\d+(\\.\\d)* ${color}+`, 'g');
    return Math.max(...(sets.match(re).map(match => match.split(" ")[0])));
}

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }

    const lines = data.split('\n');

    const sum = lines.reduce((total, line) => {
        const [game, sets] = line.split(":");
        const id = parseInt(game.split(" ")[1])

        const isPossible = getMaxPerColor(sets, "blue") < 15 && getMaxPerColor(sets, "red") < 13 && getMaxPerColor(sets, "green") < 14;

        return isPossible ? total + id : total;
    }, 0)

    console.log(sum)
})
