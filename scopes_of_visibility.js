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
