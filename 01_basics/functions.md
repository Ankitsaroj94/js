# Functions in JavaScript

Functions are blocks of code that perform a task. They help organize code and avoid repetition.

## Defining a Function

Use the `function` keyword:

```javascript
function greet(name) {
    return `Hello, ${name}!`;
}
```

## Calling a Function

Invoke a function by its name with parentheses:

```javascript
greet('Alice'); // Output: Hello, Alice!
```

## Function Expressions

Define functions using expressions:

```javascript
const greet = function(name) {
    return `Hello, ${name}!`;
};
```

## Arrow Functions

A shorter syntax for function expressions:

```javascript
const greet = (name) => `Hello, ${name}!`;
```

## Parameters and Arguments

Functions can take parameters. Arguments are the values passed to the function:

```javascript
function add(a, b) {
    return a + b;
}

add(2, 3); // Output: 5
```

## Default Parameters

Set default values for parameters:

```javascript
function greet(name = 'Guest') {
    return `Hello, ${name}!`;
}

greet(); // Output: Hello, Guest!
```

## Return Statement

Specify the value to be returned by the function:

```javascript
function multiply(a, b) {
    return a * b;
}

const result = multiply(4, 5); // result is 20
```

## Anonymous Functions

Functions without a name:

```javascript
setTimeout(function() {
    console.log('This runs after 2 seconds');
}, 2000);
```

## Immediately Invoked Function Expressions (IIFE)

Functions that run as soon as they are defined:

```javascript
(function() {
    console.log('This runs immediately');
})();
```

  
## Nested Functions

Functions can be nested within other functions. The inner function has access to the variables and parameters of the outer function.

```javascript
function outerFunction(outerVariable) {
    function innerFunction(innerVariable) {
        return outerVariable + innerVariable;
    }
    return innerFunction;
}

const addWithFive = outerFunction(5);
const result = addWithFive(3); // result is 8
```

In this example, `innerFunction` is nested inside `outerFunction`. The `innerFunction` can access the `outerVariable` from `outerFunction`, demonstrating the concept of closures in JavaScript.