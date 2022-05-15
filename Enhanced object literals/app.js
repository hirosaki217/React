// 1. define key: value for object
// 2. define methods for object
// 3. define keys for object as  variables


var name = "javascript";
var price = 1000;
var fieldPrice = "price-2"
var course = {
    name,
    price,
    [fieldPrice]: 10002,
    getName(){
        return this.name;
    }
}

console.log(course);
console.log(course.getName());