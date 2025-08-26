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
 * Complete the 'staircase' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function staircase(n, s = 0) {
    // Write your code here
   if (n - (s + 1) < 0) return;
   
   console.log(`${"".padStart((n - ++s), ' ').padEnd(n, '#')}`);
   staircase(n, s);
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    staircase(n);
}
