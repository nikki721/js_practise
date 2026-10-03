//convert it back to js object 
const arr = JSON.parse("[1, 2, 3]");

console.log(arr);
console.log(typeof arr);

const names = `["Spongebob", "Patrick", "Squidward", "Sandy"]`;
const people = `[{"name": "Spongebob","age": 30, "isEmployed": true},
                {"name": "Patrick","age": 34, "isEmployed": false},
                {"name": "Squidward","age": 50, "isEmployed": true},
                {"name": "Sandy","age": 27, "isEmployed": false}]`;

const parseData = JSON.parse(name);
console.log(parseData);