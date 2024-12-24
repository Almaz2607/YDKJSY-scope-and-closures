// ---example-1------------------
function adder(num1) {
    return function addTo(num2) {
        return num1 + num2;
    };
}

var addTo10 = adder(10);
var addTo42 = adder(42);

console.log(addTo10(17)); // 27
console.log(addTo42(22)); // 64

// ---example-2------------------
function lookupStudent(studentID) {
    var students = [
        { id: 14, name: 'Kyle' },
        { id: 73, name: 'Suzy' },
        { id: 112, name: 'Frank' },
        { id: 6, name: 'Sarah' },
    ];

    return function greetStudent(greeting) {
        var student = students.find((student) => student.id == studentID);

        return `${greeting}, ${student.name}!`;
    };
}

var chosenStudents = [lookupStudent(6), lookupStudent(112)];

console.log(chosenStudents[0].name);
// greetStudent

console.log(chosenStudents[0]('Hello'));
// Hello, Sarah!

console.log(chosenStudents[1]('Howdy'));
// Howdy, Frank!

// ---example-3-1-------------
function makeCounter() {
    var count = 0;
    return function getCurrent() {
        count = count + 1;
        return count;
    };
}

var hits = makeCounter();
console.log(hits()); // 1
console.log(hits()); // 2
console.log(hits()); // 3

// ---example-3-2-------------
var counter;

{
    let count = 0;
    counter = function getCurrent() {
        count = count + 1;
        return count;
    };
}

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

// ---example-4-1---------------
var keeps = [];

for (var i = 0; i < 3; i++) {
    keeps[i] = function keepI() {
        return i;
    };
}

console.log(keeps[0]()); // 3
console.log(keeps[1]()); // 3
console.log(keeps[2]()); // 3

// ---example-4-2---------------
var store = [];

for (var i = 0; i < 3; i++) {
    let j = i;
    store[i] = function saveEachJ() {
        return j;
    };
}

console.log(store[0]()); // 0
console.log(store[1]()); // 1
console.log(store[2]()); // 2

// --life-cycle-of-closures-&-GC--
function manageStudentGrades(studentRecords) {
    var grades = studentRecords.map(getGrade);

    return addGrade;
    // ***********************************

    function getGrade(record) {
        return record.grade;
    }

    function sortAndTrimGradesList() {
        // sort by grades, descending
        grades.sort(function desc(g1, g2) {
            return g2 - g1;
        });

        // only keep the top 10 grades
        grades = grades.slice(0, 10);
    }

    function addGrade(newGrade) {
        grades.push(newGrade);
        sortAndTrimGradesList();
        return grades;
    }
}

var addNextGrade = manageStudentGrades([
    { id: 14, name: 'Kyle', grade: 86 },
    { id: 73, name: 'Suzy', grade: 87 },
    { id: 112, name: 'Frank', grade: 75 },
    { id: 7, name: 'Sarah', grade: 91 },
]);

console.log(addNextGrade(81));
// [91, 87, 86, 81, 75]
console.log(addNextGrade(98));
// [98, 91, 87, 86, 81, 75]
