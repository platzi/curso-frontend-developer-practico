let grades = [75, 85, 92, 50, 30, 95, 54, 72, 30, 99]
let passingGrades = grades.filter(grade => grade >= 70)
let averagePassingGrade = passingGrades.reduce((sum, grade) => sum + grade, 0) / passingGrades.length

console.log('Grades: ', grades); // Grades:  [75, 85, 92, 50, 30, 95, 54, 72, 30, 99]
console.log('Passing Grades: ', passingGrades); // Passing Grades:  [ 75, 85, 92, 95, 72, 99 ]
console.log('Average Passing Grade: ', averagePassingGrade); // Average Passing Grade:  86.33333333333333