'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    // Write your code here
    let negative = 0, positive = 0, zero = 0;
    arr.forEach(n => {
        if (n < 0) ++negative;
        else if (n > 0) ++positive;
        else ++zero;
    });
    
    negative = parseFloat(negative / arr.length).toPrecision(6);
    positive = parseFloat(positive / arr.length).toPrecision(6);
    zero = parseFloat(zero / arr.length).toPrecision(6);
    
    console.log(`${positive}\n${negative}\n${zero}`);
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
