// Function with parameters
function greet(name, age, ...hobbies) {
    console.log("Hello " + name + ", you are " + age + " years old.");
    console.log("Your hobbies are: " + hobbies.join(", "));
}

// Calling the function with arguments
greet("Ankit", 25, "reading", "travelling", "coding");  