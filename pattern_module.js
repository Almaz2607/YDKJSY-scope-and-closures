// ---data structure, not module---
var Student = {
    records: [
        { id: 14, name: 'Kyle', grade: 86 },
        { id: 73, name: 'Suzy', grade: 87 },
        { id: 112, name: 'Frank', grade: 75 },
        { id: 6, name: 'Sarah', grade: 91 },
    ],
    getName(studentID) {
        var student = this.records.find((student) => student.id == studentID);
        return student.name;
    },
};

console.log(Student.getName(73)); // Suzy

// --singleton-module with visibility control---
var Student2 = (function defineStudent() {
    var records = [
        { id: 14, name: 'Kyle', grade: 86 },
        { id: 73, name: 'Suzy', grade: 87 },
        { id: 112, name: 'Frank', grade: 75 },
        { id: 6, name: 'Sarah', grade: 91 },
    ];

    var publicAPI = {
        getName,
    };

    return publicAPI;
    // **********************************

    function getName(studentID) {
        var student = records.find((student) => student.id == studentID);
        return student.name;
    }
})();

console.log(Student2.getName(112)); // Frank

// ---module-factory-------------------
function defineStudent() {
    var records = [
        { id: 14, name: 'Kyle', grade: 86 },
        { id: 73, name: 'Suzy', grade: 87 },
        { id: 112, name: 'Frank', grade: 75 },
        { id: 6, name: 'Sarah', grade: 91 },
    ];

    var publicAPI = {
        getName,
    };

    return publicAPI;
    // **********************************

    function getName(studentID) {
        var student = records.find((student) => student.id == studentID);
        return student.name;
    }
}

var fulltime = defineStudent();
console.log(fulltime.getName(6)); // Sarah
