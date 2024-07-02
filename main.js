let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let number = +prompt("Sonlarni kiriting: ");

const prompt = require('prompt-sync')();

const n = parseInt(prompt('Son kiriting: '));

let evenSum = 0;
let oddSum = 0;

for (let i = 1; i <= n; i++) {
  if (i % 2 === 0) {
    evenSum += i;
  } else {
    oddSum += i;
  }
}

console.log(`Juft sonlar yig'indisi: ${evenSum}`);
console.log(`Toq sonlar yig'indisi: ${oddSum}`);
console.log(`Farq: ${Math.abs(evenSum - oddSum)}`);

function sumUpToN(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
    return sum;
  }
  
  function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  }
  
  function sumEvenNumbers(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        sum += arr[i];
      }
    }
    return sum;
  }
  function isNumberInArray(arr, num) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === num) {
        return true;
      }
    }
    return false;
  }
  
  function modifyArray(arr, num) {
    const newArr = [];
    let found = false;
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== num) {
        newArr.push(arr[i]);
      } else {
        found = true;
      }
    }
  
    if (!found) {
      newArr.push(num);
    }
  
    return newArr;
  }
  function findDifference(arr) {
    if (arr.length < 2) {
      return 0;
    }
  
    const first = arr[0];
    const last = arr[arr.length - 1];
  
    return Math.abs(first - last);
  }
  