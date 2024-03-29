// STEP 1: Create an object with detailed properties and methods
let person = {
    name: {
        firstName: "Priyansh",
        lastName: "Thakar"
    },
    age: 80,
    gender: "Male",
    address: {
        streetNo: 100,
        streetName: "Georgian Drive",
        city: "Barrie"
    },
    interests: ["painting", "swimming", "coding"],
    greeting: function () {
        alert(`Hello, ${this.name.firstName} ${this.name.lastName} How are you?`);
    },
    bio: function () {
        return `The interests of ${this.name.firstName}, of age ${this.age}, of gender ${this.gender} are ${this.interests.join(", ")}.`;
    },
    1234: "asas",
    eyeColor: "not specified",
    goodbye: function () { 
        alert(`This is ${this.name.firstName} signing off!`);
    }
};

// Modifications and additions
// STEP 8: Set members of an object
person.name.firstName = "Robert"; 

// STEP 9a: Adding eye color
person.eyeColor = "green";

// STEP 9b: Adding a new function called 'goodbye'
person.goodbye = function () {
    alert(`Goodbye from ${this.name.firstName}!`);
};

// STEP 10: Dynamically set both names and values for objects
let key = "hairColor";
let value = "black";
person[key] = value;

let person1 = {
    name: "Person1",
    hello: function () {
        alert(`Hello from ${this.name}`);
    }
};

let person2 = {
    name: "Person2",
    hello: function () {
        alert(`Hello from ${this.name}`);
    }
};
const output = document.getElementById('output');
output.textContent = person.bio(); 