const fs = require('fs');
const filePath = 'input.txt';

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }
    const digits = [
        ['one', 'o1e'],
        ['two', 't2o'],
        ['three', 't3e'],
        ['four', '4'],
        ['five', '5e'],
        ['six', '6'],
        ['seven', '7n'],
        ['eight', 'e8'],
        ['nine', '9']
    ];

    digits.forEach(digit => { data = data.replaceAll(digit[0], digit[1]) });
    const lines = data.split('\n');
    let sum = 0;

    lines.forEach(line => {
        const chars = line.split("");
        const firstDigit = chars.find(char => !isNaN(char));
        const lastDigit = chars.reverse().find(char => !isNaN(char));
        sum += parseInt(firstDigit + lastDigit);
    });

    console.log(sum)
});
