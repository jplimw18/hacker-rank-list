'use strict';

const fs = require('fs');

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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

const _stringfyTime = (time) => `${time.hour}:${time.minute}:${time.second}`;

function timeConversion(s) {
    // Write your code here
    
    const per = s.slice(8, s.length);
    const time = {
        hour: s.slice(0, 2),
        minute: s.slice(3, 5),
        second: s.slice(6, 8),    
    };
    
    if (per === 'AM')
    {
        time.hour = time.hour === '12' ? '00' : time.hour;
        return _stringfyTime(time); 
    }
    
    time.hour = parseInt(time.hour) >= 12 ? time.hour : 24 - (12 - parseInt(time.hour));
    return _stringfyTime(time);
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
