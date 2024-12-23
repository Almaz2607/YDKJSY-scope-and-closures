// ---function-hoisting----
hello();
// Hello, Kyle!

function hello() {
    console.log('Hello, Kyle!');
}

// ---variable-hoisting----
greeting = 'Hi!';

console.log(greeting);
// Hi!

var greeting = 'Hello!';

// ---hoisting----------
myName = 'Kyle';

goodBye();
// Goodbye, Kyle!

function goodBye() {
    console.log(`Goodbye, ${myName}`);
}

var myName;
console.log(myName);
// Kyle

// ---re-declaring-variable-----
// ---example-1-------------
var studentName = 'Frank';
console.log(studentName); // Frank

var studentName;
console.log(studentName); // Frank

var studentName = undefined;
console.log(studentName); // undefined

// ---example-2-------------
var welcome;

function welcome() {
    console.log('Hello!');
}

// -essentially-an-empty-operation-
var welcome;

console.log(typeof welcome); // "function"

var welcome = 'Hello!';
console.log(typeof welcome); // "string"

// ---tdz---------------------
var personName = 'Suzy';

{
    console.log(personName);

    let personName = 'Frank';

    console.log(personName);
}
