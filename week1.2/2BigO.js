
// O(1)- Best case :::: O(n)-worse case
function logAtLeast5(n) {
    for (var i = 1; i <= Math.max(5, n); i++) {
        console.log(i);
    }
}
logAtLeast5(3);

// O(1) best case
// O(n) worse case 
function logAtMost5(n) {
    for (var i = 1; i <= Math.min(5, n); i++) {
        console.log(i);
    }
}
logAtMost5(10);


// O(n+n) - O(2n) - O(n) == in case one input
// O(m+n)                  == in case two inputs
function log(a, b) {
    for (let i = 0; i < a; i++) {
        console.log(a);
    }
    for (let j = 0; j < b; j++) {
        console.log(b);
    }
}

log(3, 5);
