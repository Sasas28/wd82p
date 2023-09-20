// Javascript Objects

const fruits = ["apple", "orange", "banana"];

// Create an object
const users = {
    name: "Carlo",
    age: 28,
    isAdmin: true,
    "like birds": false
};

// Read values in an object
users.name;
users.isAdmin;
users.age;
users["like birds"];

// Remove value in an object
delete users.age;

// Add/Change value in an object
users.job = "Software Engineer";
users.age = 25;
// Object.assign(user, {job: "hacker"})

// Property value shorthand
function makeUser(name, age) {
    return {
        name,
        age
    }
}

let user2 = makeUser("John", 32);

// Property names limitations
let obj = {
    return: 3,
    0: "test"
}

// Loop in an object
for (let key in users) {
    // console.log(users[key]);
}

const user = {
  name: "John",
  surname: "Smith"
}

user.name = "Pete";
delete user.name;

// console.log(user);

function isEmpty(obj) {
    for(let key in obj) {
        return false;
    }

    return true;
}

let schedule = {};

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

function sumAllSalaries(salaries) {
    let sum = 0;
    for(let key in salaries) {
        sum += salaries[key];
    }

    return sum;
}

console.log(sumAllSalaries(salaries));
