// JSON = (JavaScript Object Notation) data-interchange format
// Used for exchanging data between a server and a web application
// JSON files {key:value} OR [value1, value2, value3]
// JSON.stringify() = converts a JS object to a JSON string.
//          JSON.parse() = converts a JSON string to a JS object


/**
 * json are objects having key value pairs , we can have the value as array too
 * json can also be an array of objects
 *  JSON is a built in obj that is provided 
 */

const names = ["Spongebob", "Patrick", "Squidward", "Sandy"];
const person = {
    "name": "Spongebob",
    "age" : 30,
    "isEmployed": true,
   
};
const jsonString = JSON.stringify(person);
console.log(jsonString);


/**
 * [{"name":"Spongebob","age":30,"isEmployed":true}].  one long string
 */

 