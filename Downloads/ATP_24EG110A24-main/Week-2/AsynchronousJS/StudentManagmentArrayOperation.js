/*You are working on a college result analysis system.

Test Data:
const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

Tasks:
    1. filter() students who passed (marks ≥ 40)
    2. map() to add a grade field
              ≥90 → A
              ≥75 → B
              ≥60 → C
              else → D

   3. reduce() to calculate average marks
   4. find() the student who scored 92
   5. findIndex() of student "Kiran"*/

const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

// Filter students who have scored 40 or above (passing criteria)
let passed=students.filter(studentobj=>studentobj.marks>=40)
console.log(passed)

// Assign grades based on marks using conditional logic
let grademarks=students.map(studentobj=>{
    if (studentobj.marks>=90){
        return 'A'
    }
    else if(studentobj.marks>=75){
        return 'B'
    }
    else if(studentobj.marks>=60){
        return 'C'
    }
    else{
        return 'D'
    }
})
console.log(grademarks)

// Compute the class average using reduce by accumulating marks proportionally
let average=students.reduce((acc,studentobj)=>acc+studentobj.marks/students.length,0)
console.log(average)

// Retrieve the student record who scored exactly 92 marks
let findstudent=students.find(studentobj=>studentobj.marks==92)
console.log(findstudent)

// Identify the index position of student named "Kiran"
let index=students.findIndex(studentobj=>studentobj.name=='Kiran')
console.log(index)

