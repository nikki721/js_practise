/**
 * give the relative url inside fetch , 
 * fetch returns a promise 
 * we use .then() method chaining , we get response value , 
 * response also returns a promise
 * which is agian .then() chained and value is consoled
 
fetch() is a JavaScript function used to communicate with a server.
fetch() is asynchronous.

response is a Response object.
It contains things like:
status
headers
body
etc.
The actual data is inside the response body.

fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });


async function getData() {
    const response = await fetch(url);
    const data = await response.json();

    console.log(data);
}
getData();

async function getData() {
    try {
        const response = await fetch(url);

        const data = await response.json();

        console.log(data);
    }
    catch (error) {
        console.log("Something went wrong:", error);
    }
}

 */


fetch("person.json")
    .then(response => response.json())
    .then(value => console.log(value));