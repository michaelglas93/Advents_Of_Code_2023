const fs = require('fs');

// Replace 'your_file.txt' with the actual path to your file
const filePath = 'input.txt';

// Read the file asynchronously
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }

    // Split the content of the file into lines
    const lines = data.split('\n');

    // Variable to store the sum
    let totalSum = 0;

    // Iterate through each line
    lines.forEach((line, index) => {
        let sum = "";
        // Remove letters using a regular expression
        const numbersOnly = line.replace(/[^0-9]/g, '');
        const firstDigit = numbersOnly[0]
        const lastDigit = numbersOnly[numbersOnly.length - 1]
        sum = firstDigit + lastDigit
        let digit = parseInt(sum)

        totalSum += digit
    });

    console.log('Total Sum:', totalSum);
});
