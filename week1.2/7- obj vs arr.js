
const obj = {
    name: "samim",
    email: "samimfazlu@gmail.com"
}
//  when to use object
// * when order isn't important
//  * when u need faster access or removal 


// when to use array
// * where order is important
//  * when u need faster access(by index)
//  * adding or removal  (at the end)


// Objects.keys()   --- O(n)
console.log(Object.keys(obj))
// Object.values()  --- O(n)
console.log(Object.values(obj))
// Object.entries()  --- O(n)
console.log(Object.entries(obj))

