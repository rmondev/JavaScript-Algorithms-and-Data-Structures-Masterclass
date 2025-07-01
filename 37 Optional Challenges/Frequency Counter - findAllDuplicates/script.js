// Frequency Counter - findAllDuplicates
// Given an array of positive integers, some elements appear twice and others appear once. Find all the elements that appear twice in this array. Note that you can return the elements in any order.

// findAllDuplicates([4,3,2,7,8,2,3,1]) // array with 2 and 3
// findAllDuplicates([4, 3, 2, 1, 0]) // []
// findAllDuplicates([4, 3, 2, 1, 0, 1, 2, 3]) // array with 3, 2, and 1
// Time Complexity - O(n)


function findAllDuplicates(arr){
  let counts = {}
  
  for(let char of arr){
      counts[char] = counts[char] ? counts[char] + 1 : 1;
  }
  
  let duplicates = []
  for(let key in counts){
    console.log(key + ':' + counts[key])
    // console.log(counts[key])

    if(counts[key] == 2) { 
        duplicates.push(parseInt(key))
    }
  }

return duplicates
  
}

console.log(findAllDuplicates([4,3,2,7,8,2,3,1])) // array with 2 and 3
// findAllDuplicates([4, 3, 2, 1, 0]) // []
// findAllDuplicates([4, 3, 2, 1, 0, 1, 2, 3]) // array with 3, 2, and 1