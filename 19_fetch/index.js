// fetch = Function used for making HTTP requests to fetch resources.
//          (JSON style data, images, files)
//          Simplifies asynchronous data fetching in JavaScript and
//          used for interacting with APIs to retrieve and send
//          data asynchronously over the web.
// fetch(url, {options})



async function getUsers() {
    try {
        const response = await fetch("https://example.com/users");

        if (!response.ok) {
            throw new Error("Failed to fetch users");
        }

        const users = await response.json();

        console.log(users);
    }
    catch (error) {
        console.log(error);
    }
}

getUsers();

/**
 * doing it normally 
 * 
 */

function getUsers() {
    fetch("https://example.com/users")
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to fetch users");
            }

            return response.json();
        })
        .then(users => {
            console.log(users);
        })
        .catch(error => {
            console.log(error);
        });
}

getUsers();