const fs = require('fs');
const filePath = 'input.txt';

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }

    const lines = data.split('\n');
    let totalSum = 0;

    lines.forEach((line, index) => {
        let sum = "";
        const numbersOnly = line.replace(/[^0-9]/g, '');
        const firstDigit = numbersOnly[0]
        const lastDigit = numbersOnly[numbersOnly.length - 1]
        sum = firstDigit + lastDigit
        let digit = parseInt(sum)

        totalSum += digit
    });

    console.log('Total Sum:', totalSum);
});
