function countCharsInStr(str) {
 let count = {};
 for (let char of str) { 
    if (/[a-zA-Z0-9]/.test(char)) {
        count[char] > 0 ? count[char.toLowerCase()]++ : count[char.toLowerCase()] = 1;
    }
 }
 return count;
}

console.log(countCharsInStr("Hello there!")); 