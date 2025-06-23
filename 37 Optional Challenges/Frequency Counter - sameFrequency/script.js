// Frequency Counter - sameFrequency
// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities:

// Time: O(N)

// Sample Input:

// sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false

function sameFrequency(first, second) {
    // Check if first and second have the same amount of digits, if not return false.

    let firstNum = String(first);
    let secondNum = String(second);

    if (firstNum.length !== secondNum.length) {
        return false;
    }

    let lookup = {};

    for (let digit of firstNum) {
        lookup[digit] ? lookup[digit]++ : lookup[digit] = 1;
    }

    for (let digit of secondNum) {
          if (!lookup[digit]) {
            return false;
        } else {
            lookup[digit]--;
        }
    }

    return true;

}

console.log(sameFrequency(182,281)) // true
console.log(sameFrequency(34,14)) // false
console.log(sameFrequency(3589578, 5879385)) // true
console.log(sameFrequency(22,222)) // false