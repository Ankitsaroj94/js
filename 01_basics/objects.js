// Creating an object
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};

// Accessing object properties
console.log(person.firstName); // Output: John
console.log(person["lastName"]); // Output: Doe

// Calling object methods
console.log(person.fullName()); // Output: John Doe

// Adding new properties
person.gender = "male";
console.log(person.gender); // Output: male

// Deleting properties
delete person.age;
console.log(person.age); // Output: undefined