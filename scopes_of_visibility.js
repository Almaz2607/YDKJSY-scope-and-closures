// 1-external-global-scope--------
// students, getStudentName & nextStudent in global scope
var students = [
    { id: 14, name: 'Kyle' },
    { id: 24, name: 'Suzy' },
    { id: 82, name: 'Frank' },
    { id: 59, name: 'Sarah' },
];

function getStudentName(studentID) {
    // 2-functional-scope----------
    // studentID in functional scope
    for (let student of students) {
        // 3-loop-scope------------
        // student in loop scope
        if (student.id == studentID) {
            return student.name;
        }
    }
}

var nextStudent = getStudentName(24);

console.log(nextStudent);

// ---variable-shadowing----------------
// --example-1--------------------------
var personName = 'Patrick';

function printPerson(personName) {
    personName = personName.toUpperCase();
    console.log(personName);
}

printPerson('Alice');
// ALICE
console.log(personName);
// Patrick
printPerson(personName);
// PATRICK
console.log(personName);
// Patrick

// --example-2-----------------------------
var special = 77;

function lookingFor(special) {
    // identifier 'special' (parameter) in this scope
    // is substituted inside keepLooking() and is
    // therefore not accessible from this scope
    function keepLooking() {
        var special = 3.141592;
        console.log(special);
        console.log(window.special);
    }

    keepLooking();
}

lookingFor(557799);
// 3.141592
// 77

// ---reverse-shadowing-----------------
var someName = 'John';

function printSomeName(someName) {
    console.log(someName);
    console.log(window.someName);
}

printSomeName('Elizabeth');
// Elizabeth
// John
