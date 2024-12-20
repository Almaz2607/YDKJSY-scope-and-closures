// ---example-1-------------------
(function wrappingOuterScope() {
    var moduleOne = (function one() {
        // ..
    })();

    var moduleTwo = (function two() {
        // ..
        function callModuleOne() {
            moduleOne.someMethod();
        }
        // ..
    })();
})();

// ---example-2-------------------
// module1.js:
var moduleOne = (function one() {
    // ..
})();

// module2.js
var moduleTwo = (function two() {
    // ..
    function callModuleOne() {
        moduleOne.someMethod();
    }

    // ..
})();

// --browser-global-object-window---------
var studentName = 'Bill';

function hello() {
    console.log(`Hello, ${window.studentName}!`);
}

hello();
// Hello, Bill!

// ---web-workers-global-object-self------
var personName = 'Harry';
let personID = 55;

function greeting() {
    console.log(`Hello, ${self.personName}!`);
}

greeting();
// Hello, Harry!

console.log(self.personID);
// undefined
