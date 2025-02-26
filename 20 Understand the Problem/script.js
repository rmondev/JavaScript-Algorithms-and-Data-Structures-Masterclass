// Write a function which takes two numbers and returns their sum

// 1. Can I restate the problem in my own words?
"implememnt addition"
// 2. What are the inputs that go into the problem?
    //  - ints ?
    //  - floats?
    //  - what about string for larger numbers ?
// 3. What are the outputs that should come from the solution to the problem?
    // - int? float? string?

// 4. Can the outputs be determined from the inputs? In other words, do I have enough information to solve the  problem? (You may not be able to answer this question until you set about solving the problem. That's okay; it's still worth considering the question at this early stage.)

// 5. How should I label the important pieces of data that are a part of the problem?


// Write a function which takes in a string and returns counts of each character in the string:

// charCount("Hello");

// Output:
// { h: 1, e: 1, l: 2, o: 1}

// charCount("Your PIN number is 1234")

// Output:
/*    {
        1: 1,
        2: 1,
        3: 1,
        4: 1,
        b: 1,
        e: 1,
        i: 2,
        m: 1,
        n: 2,
        o: 1,
        p: 1,
        r: 2,
        s: 1,
        u: 2,
        y: 1
    }
*/

function charCount(str) {
    // create a return object
    // loop through each character in the string
        // do something
    // return object
}

function charCount(str) {
    // create a return object
    let result = {};
    // loop through each character in the string
    for(let i = 0; i < str.length; i++){
        let char = str[i].toLowerCase();
        const regex = /[a-z0-9]/g;
        if (char.match(regex)){
        // check if char is in result
            if (result[char] > 0){
                // if so, increment result[char] by 1
                result[char]++;
            } else {
                // if not, set result[char] to 1
                result[char] = 1;
            }
        }
    }
    // return result object
    return result;
}

function charCount(str) {
    let result = {};

    // use 'for of' loop
    for (var char of str) {
        char = char.toLowerCase();

        // use .test(char)
        if (/[a-z0-9]/.test(char)) {
            // if (result[char] > 0) {
            //     result[char]++;
            // } else {
            //     result[char] = 1;
            // }

            // use ternary operator instead

            // result[char] ? ++result[char] : result[char] = 1;
            
            // or

            result[char] = ++result[char] || 1;
        }
    }
    return result; 
}



console.log(charCount("Hello How Are You Doing 1 2 3"));



