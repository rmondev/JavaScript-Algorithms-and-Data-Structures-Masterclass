// Frequency Counter / Multiple Pointers - areThereDuplicates
// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

// Examples:

// areThereDuplicates(1, 2, 3) // false
// areThereDuplicates(1, 2, 2) // true 
// areThereDuplicates('a', 'b', 'c', 'a') // true 
// Restrictions:

// Time - O(n)

// Space - O(n)

// Bonus:

// Time - O(n log n)

// Space - O(1)

function areThereDuplicates(...args) {


  let collection = {};
  for (let val in args) {
    collection[args[val]] = (collection[args[val]] || 0) + 1
    // console.log(`Value: ${val}, Count: ${collection[val]}`);
  }

  for (let key in collection) {
    console.log(key + ' : ' + collection[key])
    
    if (collection[key] > 1) return true
  }
  return false;
}


console.log(areThereDuplicates('a', 'b', 'c', 'd', 'd'));


