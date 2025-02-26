function addUpTo(n){
    let total = 0;
    for(let i = 1; i <= n; i++){
        total += i;
    }
    return total;
}

function addUpToV2(n){
    return n * (n + 1) / 2;
}

let t1 = performance.now();
console.log(addUpTo(1000000000));
let t2 = performance.now()
console.log(`Time Elapsed: ${(t2-t1) / 1000} seconds.`);



let t12 = performance.now();
console.log(addUpToV2(1000000000));
let t22 = performance.now()
console.log(`V2 Time Elapsed: ${(t22-t12) / 1000} seconds.`);