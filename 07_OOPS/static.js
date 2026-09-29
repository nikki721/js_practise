// static , only accessible by class not the object
class User {  // <--- Changed this line
    static userCount = 0;

    constructor(username) {
        this.username = username;
        User.userCount++;
    }
}

const user1 = new User("nikki");
const user2 = new User("soso");

console.log(user1.username);
console.log(user2.username);

console.log(User.userCount);