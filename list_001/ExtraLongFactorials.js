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
 * Complete the 'extraLongFactorials' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function extraLongFactorials(n, fat = 0) {
    // Write your code here
    if (n === 1) 
    {
        console.log(fat == 0? 1 : `${fat}`.replace('n', ''));
        return; 
    }
    
    if (fat === 0) fat = BigInt(n--);
    
    fat *= BigInt(n);
    extraLongFactorials(n - 1, fat);
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    extraLongFactorials(n);
}
