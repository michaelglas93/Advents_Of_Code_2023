const fs = require('fs');
const filePath = './day3/input.txt';

const reNumbers = /\d+/g
const reSymbols = /[^\d\.]/
let totalSum = 0;

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }

    const lines = data.split('\n');
    //check line for line
    lines.forEach((line, index) => {
        const numbers = [...line.matchAll(reNumbers)];

        //check all the numbers
        numbers.forEach((match) => {
            const num = Number.parseInt(match[0]);
            const start = match.index;
            const end = start + match[0].length - 1
            let isValid = false

            //check left of number
            if (start - 1 >= 0) {
                const sym = line[start - 1];
                const isSymbol = !!reSymbols.exec(sym);
                if (isSymbol) {
                    isValid = true
                }
            }

            //check right of number
            if (end + 1 < line.length) {
                const sym = line[end + 1];
                const isSymbol = !!reSymbols.exec(sym);
                if (isSymbol) {
                    isValid = true
                }
            }

            //check row above number
            if (index != 0) {
                const top = lines[index - 1];
                const topStart = Math.max(0, start - 1);
                const topEnd = Math.min(top.length - 1, end + 1);

                for (let i = topStart; i <= topEnd; i++) {
                    const sym = top[i];
                    const isSymbol = !!reSymbols.exec(sym);
                    if (isSymbol) {
                        isValid = true
                    }
                }
            }

            //check row below number
            if (index != lines.length - 1) {
                const bot = lines[index + 1];
                const botStart = Math.max(0, start - 1);
                const botEnd = Math.min(bot.length - 1, end + 1);

                for (let i = botStart; i <= botEnd; i++) {
                    const sym = bot[i];
                    const isSymbol = !!reSymbols.exec(sym);
                    if (isSymbol) {
                        isValid = true
                    }
                }
            }

            if (isValid) {
                totalSum += num;
            }
        })
    });
    console.log(totalSum);
});