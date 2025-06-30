// Write a function called 'same', which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.


function same(arr1, arr2) {
    if (arr1.length != arr2.length){
        return false;
    }

    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    for (let val of arr1 ){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
        
    }

    // console.log(frequencyCounter1);

    for (let val of arr2 ){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
        
    }
    
    // console.log(frequencyCounter2);

    for(let key in frequencyCounter1) {
        if(!(key ** 2 in frequencyCounter2)){
            return false;
        }

        if(frequencyCounter2[key ** 2] != frequencyCounter1[key]){
            return false;
        }
    }

    return true;
}


// console.log(same([1,2,3], [4,1,9])); // true
// console.log(same([1,2,3], [1,9])); // false
// console.log(same([1,2,1], [4,4,1])); // false must be same frequency

function validAnagram(str1, str2) {

    // if (!str1 || !str2){
    //     return true;
    // }

    if (str1.length != str2.length){
        return false;
    } 
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    for (let val of str1) {
        frequencyCounter1[val] = frequencyCounter1[val] ? frequencyCounter1[val] + 1 : 1;
    };

    
    for(let val of str2) {
        frequencyCounter2[val] = frequencyCounter2[val] ? frequencyCounter2[val] + 1 : 1;
    };
    

    for (let key in frequencyCounter1){
        // console.log(frequencyCounter1[key]);
        // console.log(key);

        if (!(key in frequencyCounter2)) {
            return false;
        }

        if (frequencyCounter2[key] != frequencyCounter1[key]) {
            return false;
        }
    }

    return true;

}

function validAnagram(first, second){
    if (first.length != second.length){
        return false;
    }

    let lookup = {};

    for (let letter of first) {
        lookup[letter] ? lookup[letter]++ : lookup[letter] = 1;
    }

    for (let letter of second) {
          if (!lookup[letter]) {
            return false;
        } else {
            lookup[letter]--;
        }
    }

    return true;
}


console.log(validAnagram('','')); // true
console.log(validAnagram('aaz','zza')); // false
console.log(validAnagram('anagram','nagaram')); // true
console.log(validAnagram('rat','car')); // false
console.log(validAnagram('awesome','awesom')); // false
console.log(validAnagram('qwerty','qeywrt')); // true
console.log(validAnagram('texttwisttime','timetwisttext')); // true




