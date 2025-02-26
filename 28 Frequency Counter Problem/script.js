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

    for (let e of str1) {
        frequencyCounter1[e] = frequencyCounter1[e] ? frequencyCounter1[e] + 1 : 1;
    };

    
    for(let e of str2) {
        frequencyCounter2[e] = frequencyCounter2[e] ? frequencyCounter2[e] + 1 : 1;
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

    for (let i = 0; i < first.length; i++) {
        const letter = first[i];
        // If letter exists, than increment by 1, otherwise set to 1 
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }

    for(let i = 0; i < second.length; i++){
        let letter = second[i];
        // Can't find letter or letter is 0, then it is not an anagram
        if (!lookup[letter]) {
            return false;
        } else {
            lookup[letter] -= 1;
        }

    }
}


console.log(validAnagram('','')); // true
console.log(validAnagram('aaz','zza')); // false
console.log(validAnagram('anagram','nagaram')); // true
console.log(validAnagram('rat','car')); // false
console.log(validAnagram('awesome','awesom')); // false
console.log(validAnagram('qwerty','qeywrt')); // true
console.log(validAnagram('texttwisttime','timetwisttext')); // true




