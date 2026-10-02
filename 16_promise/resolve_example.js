// Promise = An Object that manages asynchronous operations.
// Wrap a Promise object around {asynchronous code}
// "I promise to return a value"
// PENDING -> RESOLVED or REJECTED
//new Promise((resolve, reject) => {asynchronous code})
// DO THESE CHORES IN ORDER
// 1. WALK THE DOG
// 2. CLEAN THE KITCHEN
// 3. TAKE OUT THE TRASH


function walkDog(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("You walk the dog ");
        }, 1500);
    });
}

function cleanKitchen () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("You clean the kitchen");
        }, 2500);
    });
}

function takeOutTrash() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("You take out the trash >>");
        }, 500);
    });
}
/** we method chain the .then() methods , as its easier than nested fucntions
 * at first , the value is the result returned by the walkDog ke resolve , and we consolve log that , 
 * here we are gonna use arrow function 
 */
walkDog().then(value => { console.log(value); return cleanKitchen ()})
        .then(value => { console.log(value); return takeOutTrash()})
          .then(value => {console.log(value); console.log("You finished all the tasks")});