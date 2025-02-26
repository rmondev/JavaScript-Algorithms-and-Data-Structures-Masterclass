// If time is not the best metric for performance of algorithms, than what is?
// Rather than counting seconds, which can be so variable depending on many factors..
// Lets count the 'number' of simple operations the computer has to perform!


function addUpToV2(n){
    return n * (n + 1) / 2;
}

// In this function there are three operations being performed:
    // (*) Multiplication
    // (+) Addition
    // (/) Division

// 3 Simple operations, regardless of the size of n

// Compared to:

function addUpTo(n){
    let total = 0;
    for(let i = 1; i <= n; i++){
        total += i;
    }
    return total;
}

// In this function there are many operations being performed:
    // For (+=):
    // - n additions (+)
    // - n assignments (=)

    // For (i++):
    // - n additions (+)
    // - n assignments (=)

    // For (let total = 0;):
    // - 1 assignment
    
    // For (let i = 1):
    // - 1 assignment

    // For (i <= n):
    // - n comparisons

// Counting is hard!

// Depending on what we count, the number of operations can be as low as 2n or as hugh as 5n + 2

// But regardless of the exact number, the number of operations grows roughly with the proportionally with n
