// So many ways to solve a specific problem
// **** Suppose we want to write a function that calculates the sum of all numbers from 1 up to (and including) some number n.


// between two codes which one is BETTER ?
// Then WHAT DOES BETTER MEAN ?
// * Faster in execution(Requires in less time)
// * Less-memory-intensive(Requires in less memory)
// * More readable?

// In real life - we give importance to execute in less time rather than memory space.

function sumUpTo(num) {
    let total = 0;
    for (let i = 0; i < num; i++) {
        console.log(total, i);
        total += i;
        console.log(total);
    }
    return total;
}

const t1 = performance.now();
const totall = sumUpTo(10);
const t2 = performance.now();

console.log(`time required: ${(t2 - t1) / 1000} seconds `);


// COUNTING OPERATION
function sumUpTo(n) {
    return n * (n + 1) / 2;
}
sumUpTo(10);

// COUNTING IN HARD
// Depending on what we count, the number of operations can be vary!
// But regardless of exact number, the number of operations grows roughly proportionally with n
// if n doubles, the number of operations will also roughly double. 