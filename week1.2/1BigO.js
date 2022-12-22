// when given two codes - standard way to measure codes is Big-O.
// how number of operation increase/relates with input
// Best case (Omega)
// average case(theta)
// Worse case(O)



// linear or ... Big O - O(n) === in case of one loop
// quadratic Big(O) = O(n^2) === in case of two loops
// 2n = O(n)  === in case of j<2
// function log(n) {
//     count = 0;
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < 2; j++) {

//             console.log(i, j);
//             count++;
//         }
//     }
//     console.log(count);
// }
// log(4);



// O(n)+O(n) = O(2n) = O(n)
// function log(n) {
//     let count = 0;
//     for (let i = 0; i < n; i++) {
//         count++;
//         console.log(i);
//     }
//     for (let i = 0; i < n; i++) {
//         count++;
//         console.log(i);
//     }
//     console.log(count);
// }
// log(5);

//*** */ O(n*n*n) - O(n^3)
// function log(n) {
//     let count = 0;
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < n; j++) {
//             for (let k = 0; k < n; k++) {
//                 count++;
//                 console.log(i,j,k);
//             }
//         }
//     }

//     console.log(count);
// }
// log(2);


//*** */  O(n^2+n) - O(n^2)
// function log(n) {
//     let count = 0;
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < n; j++) {

//                 count++;
//                 console.log(i,j);

//         }
//     }

//     for (let k = 0; k < n; k++) {
//         count++;
//         console.log(k);
//     }

//     console.log(count);
// }
// log(2);



// Big(O) - O(1) - constant
// function addItems(n) {
//     console.log(n + n + n);
// }
// addItems(20);





