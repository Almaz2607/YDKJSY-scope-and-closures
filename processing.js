// --syntax-error-----------------
var greeting = "What's up";

console.log(greeting);

// greeting = .'hi'
// SyntaxError: unexpected token

// ---uncaught-SyntaxError----------
console.log('Howdy');

saySomething('Hello', 'Hi');

function saySomething(greeting, greeting) {
    // 'use strict';
    console.log(greeting);
}

//---hoisting---------------------
function sayOfSomething() {
    var greeting = 'Hello';
    {
        greeting = 'Howdy'; // an error here
        let greeting = 'Hi';
        console.log(greeting);
    }
}

sayOfSomething();
// Uncaught ReferenceError----------
