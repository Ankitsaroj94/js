# Global and Local Scope in JavaScript

## Introduction
In JavaScript, scope determines the accessibility of variables, objects, and functions from different parts of the code.

## Global Scope
Variables declared outside any function are in the global scope. They can be accessed from anywhere in the code.

```javascript
let globalVar = "I am global";

function showGlobalVar() {
    console.log(globalVar); 
}

showGlobalVar();
console.log(globalVar); 
```

## Local Scope
Variables declared within a function are in the local scope. They can only be accessed within that function.

```javascript
function showLocalVar() {
    let localVar = "I am local";
    console.log(localVar); 
}

showLocalVar();
console.log(localVar); 
```

## Block Scope (ES6)
With ES6, `let` and `const` introduce block scope, which confines variables to the block they are defined in.

```javascript
{
    let blockVar = "I am block scoped";
    console.log(blockVar); 
}

console.log(blockVar); 
```

## Summary
- **Global Scope**: Accessible anywhere in the code.
- **Local Scope**: Accessible only within the function.
- **Block Scope**: Accessible only within the block (with `let` and `const`).

Understanding scope is crucial for managing variable accessibility and avoiding conflicts in your code.