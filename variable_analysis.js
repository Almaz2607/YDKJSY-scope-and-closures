// -variables-receiver&source
// 1st-receiver-students
var students = [
    { id: 14, name: 'Kyle' },
    { id: 24, name: 'Suzy' },
    { id: 82, name: 'Frank' },
    { id: 59, name: 'Sarah' },
];
// 2nd-receiver-function getStudentName()
// 1st-source-(studentID)
function getStudentName(studentID) {
    // 3rd-receiver-student
    // 2nd-source-students
    for (let student of students) {
        // 3rd-source-student.id
        // 4th-source-student.name
        // 5th-source-studentID
        if (student.id == studentID) {
            return student.name;
        }
    }
}
// 4th-receiver-nextStudent
// 5th-receiver(24)
// 6th-source-getStudentName()
var nextStudent = getStudentName(24);
// 7th-source-console
// 8th-source-nextStudent
console.log(nextStudent);
