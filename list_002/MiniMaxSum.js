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
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

const _minMaxN = (arr, max = false) => {
  if (max)
  {
    let nmax = arr[0];
    for (let i = 1; i < arr.length; ++i) {
        if (arr[i] > nmax)
            nmax = arr[i];
    }
    
    return nmax;
  }
  
  let nmin = arr[0];
  for (let i = 1; i < arr.length; ++i) {
    if (arr[i] < nmin)
        nmin = arr[i];
  }
  
  return nmin;
};

function miniMaxSum(arr) {
    // Write your code here
    let minSum = 0, maxSum = 0;
    
    const minArr = arr.slice(0, arr.length);
    const maxArr = arr.slice(0, arr.length);
    
    for (let i = 0; i < 4; ++i) {
        let nmin = _minMaxN(minArr);
        let nmax = _minMaxN(maxArr, true);
        
        minArr.splice(minArr.indexOf(nmin), 1);
        maxArr.splice(maxArr.indexOf(nmax), 1);
        
        minSum += nmin;
        maxSum += nmax;
    }
    
    
    console.log(minSum, maxSum);
}

function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
