// Frequency Counter - constructNote
// Write a function called constructNote, which accepts two strings, a message and some letters. The function should return true if the message can be built with the letters that you are given, or it should return false.

// Assume that there are only lowercase letters and no space or special characters in both the message and the letters.

// Bonus Constraints:

// If M is the length of message and N is the length of letters:

// Time Complexity: O(M+N)

// Space Complexity: O(N)

// Examples:

// constructNote('aa', 'abc') // false
// constructNote('abc', 'dcba') // true
// constructNote('aabbcc', 'bcabcaddff') // true


function constructNote(str1, str2) {
    if (str2.length < str1.length) {
        return false;
    }

    let str1Counter = {}

    for(let char of str1) {
        str1Counter[char] = str1Counter[char] ? str1Counter[char] + 1 : 1;
        
    }

    //console.log(str1Counter)

    let str2Counter = {}

    for(let char of str2) {
        str2Counter[char] = str2Counter[char] ? str2Counter[char] + 1 : 1;
    }
    //console.log(str2Counter)

    for(let key in str1Counter) {
        //console.log(key)
        //console.log(str2Counter[key])
        
        if(!(str1Counter[key]) || str2Counter[key] < str1Counter[key]) return false

        
    }

    return true
}

// console.log(constructNote('aab', 'abc'))

console.log(constructNote('aa', 'abc')) // false
console.log(constructNote('abc', 'dcba')) // true
console.log(constructNote('aabbcc', 'bcabcaddff')) // true