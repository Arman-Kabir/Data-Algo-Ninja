//  Data is Everywhere
// Data Structures:  Best way to structure/organize data so that we can easily access,manipulate the data(add,update,delete)
// Algorithm: Steps to solve  a specific problem

// Sum up to a specific number

function sumUpTo(num) {
    let sum = 0;
    for (let i = 0; i < num; i++) {
        console.log(sum,i);
        sum += i;
        console.log(sum);
    }
    return sum;
}

const total = sumUpTo(10);
console.log(total);

// Data is organized
// steps to follow to access is not as easy as you think
// saving milliseconds counts!


