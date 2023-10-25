/* exported getStudentNames */
function getStudentNames(students) {
  const result = [];

  for (const student of students) {
    result.push(student.name);
  }

  return result;
}
