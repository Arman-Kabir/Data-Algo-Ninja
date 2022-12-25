// OBJECT - we can place data as key,value pairs inside objects
// other programming languages call it hashmaps, but js call it objects.

const obj = {
    name: "samim",
    email: "samimfazlu@gmail.com"
}

// accessing element --- O(1)
console.log(obj.name);

// adding element --- O(1)
obj.profession = 'programmer';
console.log(obj);

// delete element --- O(1)
delete obj.profession;
console.log(obj);


// searching O(1)
console.log('email' in  obj);

// searching O(n)
for (let key in obj) {
    console.log(obj[key])
    console.log(key);
}

console.log(obj.name);
console.log(obj['1email']);  //invalid key must be accessed by [], same in dynamic value as well.