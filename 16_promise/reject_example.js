/**
 * when a acynchronous code fails to do something inside a promise, 
 * we need to reject it , so we use reject 
 * this is similar to error handling , and after the .then() method chaining we do 
 * .catch(console.error(error));
 * which is gonna print the message inside the reject
 * and in this method chaining , if the first promise is rejected ,then we
 * dont move to resolve the following promises 
 * 
 */


function walkDog(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const dogWalked = false;

            if(dogWalked){
                resolve("You walk the dog ");
            }  
            else{
                reject("You DIDNT WALK THE DOG !");
            }
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
 * here the first promise was rejected, so we dont resolve the kitchen and trash promise
 */
walkDog().then(value => { console.log(value); return cleanKitchen ()})
        .then(value => { console.log(value); return takeOutTrash()})
          .then(value => {console.log(value); console.log("You finished all the tasks")});