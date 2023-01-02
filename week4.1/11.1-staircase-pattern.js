// step pattern, pyramid pattern
// matrix
// recursion


// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character. Make sure the step has spaces on the right hand side.


function steps(n) {
    // for row
    for (let row = 0; row < n; row++) {
        let step = ''
        // for column
        for (let column = 0; column < n; column++) {
            if (column<=row){
                step+='#'
            }else{
                step+=''
            }
        }
        console.log(step);
    }
}

steps(3);