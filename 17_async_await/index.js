// Async/Await = Async = makes a function return a promise
// Await = makes an async function wait for a promise

//Allows you write asynchronous code in a synchronous manner
// Async doesn't have resolve or reject parameters
// Everything after Await is placed in an event queue


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

/**
 * instead of using .then() method chaining we can do it more synchronously (line by line)
 * by enclosing it under async, funtion
 */

async function doChores(){

    const walkDogResult = await walkDog();
    console.log(walkDogResult);

    const cleanKitchenResult = await cleanKitchen();
    console.log(cleanKitchenResult);

    const takeOutTrashResult = await takeOutTrash();
    console.log(takeOutTrashResult);

    console.log("you finished all the chores !");
}
doChores()