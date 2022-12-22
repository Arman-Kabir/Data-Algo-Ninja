//  bigocheatsheet.com
// efficiency
// O(1) - O(logn) - O(n) - O(nlogn) - O(n^2)


// not dependent on inputs. Alz constant O(1)
function addItems() {
    console.log(10 + 10 + 10)
}

addItems();

// BIG(O) SHORTHANDS
//  * Arithmetic operations are constant
//  * Variable assignment is constant
//  * Accessing elements in an array (by index) or object (by key) is constant
//  * In a loop, the complexity is the length of the loop times the complexity of whatever happens inside of the loop