const fs = require('fs');
const filePath = './day2/input.txt';

const getMax = (sets, color) => {
    const re = new RegExp(`\\d+(\\.\\d)* ${color}+`, 'g');
    return Math.max(...(sets.match(re).map(match => match.split(" ")[0])));
}

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }

    const lines = data.split('\n');

    const totalSum = lines.reduce((sum, line) => {
        const [game, sets] = line.split(":");
        const id = parseInt(game.split(" ")[1])

        const maxBlue = getMax(sets, "blue")
        const maxRed = getMax(sets, "red")
        const maxGreen = getMax(sets, "green")

        const multi = maxBlue * maxRed * maxGreen

        return sum + multi;
    }, 0)

    console.log(totalSum)
})
