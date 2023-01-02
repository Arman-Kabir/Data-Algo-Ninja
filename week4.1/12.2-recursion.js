// recursion --- that call themselves
// recursive function has a base case in which it stops.

// iterative solution
// function countToZero(num) {
//     for (let i = num; i >= 0; i--) {
//         console.log(i);
//     }
// }
// countToZero(10)


// recursive solution
function countToZero(num=10) {
    // base case
    console.log(num);
    // must keep eye on return
    if (num === 0) return

    // argument must be changed in some extent
    countToZero(num - 1);
    // for (let i = num; i >= 0; i--) {
    //     console.log(i);
    // }
}

countToZero()