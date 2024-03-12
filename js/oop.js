const output = document.getElementById('output');
const output2 = document.getElementById('output2');

/* STEP 1a: Create a new object using a regular function */
function createNewPerson(name) {
    let obj = {};
    obj.name = name;
    obj.greetings = function () {
        return `Hello, this is ${this.name}`;
    };
    return obj;
}
/* STEP 1b: Use the console to create a new person, and then invoke the function represented by .greeting() */
let person1 = createNewPerson("P1");
let person2 = createNewPerson("P2");
output.textContent = person1.greetings();

/* STEP 2a: In order to be a bit more concise, JavaScript allows us to use constructor functions - 
rewrite the above function, without returning anything. Capitalize the name of the function. */
function Person(firstName, lastName, age, gender, interests) {
    this.name = {
        "firstName": firstName,
        "lastName": lastName,
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
    this.greetings = function () {
        return `Hello, this is ${this.name.firstName}`;
    };
}
/* STEP 2b: Use the console to create a couple of different people, using the 'new' keyword, 
and again invoking the .greeting() method for each person */
let person3 = new Person("P3", 90, "Female", ["I1", "I2", "I3"]);
 // STEP 2a and 2b - Rewrite using constructor function
 function Person(firstName, lastName, age, gender, interests) {
     this.name = {
         firstName: firstName,
         lastName: lastName,
     };
     this.age = age;
     this.gender = gender;
     this.interests = interests;
     this.greeting = function() {
         return `Hello, this is ${this.name.firstName}`;
     };
     this.bio = function() {
         return `${this.name.firstName} ${this.name.lastName} is ${this.age} years old. They like ${this.interests.join(', ')}.`;
     };
 }
 output2.textContent = person3.greeting();
 let car = new Object();
 car.brand = "Nissan";
 car.model = "Ultima";
 car.year = 2020;
 car.description = function() {
     return `This is a ${this.year} ${this.brand} ${this.model}.`;
 };
 
 // STEP 5a and 5b - Using the Object.create() method
 let anotherCar = Object.create(car);
 output2.textContent += `\n${anotherCar.description()}`; // Assuming the element can handle multiline text
 

/* STEP 5b: Output to the paragraph anotherCar.brand - you will see that it has retained the properties of the original object. */
console.log(anotherCar.brand);


// That's it! Now on to Lab 3...
// Create a JavaScript function that permits the creation of a hamburger object
// Consider that a hamburger has many options – that might include
/*
    different types of buns,
    vegetable garnishes, 
    assortments of cheeses, 
    specialty sauces, 
    different meat patties(beef, chicken, vegetarian), 
    single, double, or triple patty, 
    Pickles, hot peppers, olives etc.
*/
// add some extra if you want
// Make sure that the function allows for the output of a sentence that describes the hamburger, too
 
function createHamburger(options) {
    this.bunType = options.bunType;
    this.garnishes = options.garnishes;
    this.cheeses = options.cheeses;
    this.sauces = options.sauces;
    this.meat = options.meat;
    this.pattyCount = options.pattyCount;
    this.extras = options.extras;

    this.output = function() {
        return `Your hamburger has a ${this.bunType} bun, ${this.pattyCount} ${this.meat} patties, ${this.cheeses.join(', ')} cheese, garnished with ${this.garnishes.join(', ')}, topped with ${this.sauces.join(', ')}, and includes ${this.extras.join(', ')}.`;
    };
}

let myHamburger = new createHamburger({
    bunType: "sesame",
    garnishes: ["lettuce", "tomato"],
    cheeses: ["cheddar", "gouda"],
    sauces: ["mayo", "ketchup"],
    meat: "beef",
    pattyCount: 2,
    extras: ["pickles", "onions", "hot peppers"],
});

console.log(myHamburger.output());
output2.innerHTML += "<br><br>" + myHamburger.output();
// This page inspired by and adapted from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS