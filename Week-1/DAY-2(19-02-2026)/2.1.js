
//Insert new Emp at 2nd position
//Remove an emp with name "Kiran"
//Change the last mark 95 to 75 of emp  "Sneha"

const employees = [
  {
    eno: 101,
    name: "Ravi",
    marks: [78, 82, 91],
  },
  {
    eno: 102,
    name: "Bhanu",
    marks: [65, 70, 68],
  },
  {
    eno: 103,
    name: "Sneha",
    marks: [88, 92, 95],
  },
  {
    eno: 104,
    name: "Kiran",
    marks: [55, 60, 58],
  },
  {
    eno: 105,
    name: "Anitha",
    marks: [90, 85, 87],
  },
];

emp={
    eno:106,
    name:"murthy",
    marks:[56,78,89]
}

// Insert the new employee object at index 1 
employees.splice(1,0,emp)
console.log(employees)

// Traverse the array and remove the employee whose name is "Kiran"
for(i in employees){
    if(employees[i].name=='Kiran'){
        employees.splice(i,1)
    }
}
console.log(employees)

// Locate employee "Sneha" and update her last mark using splice
for(i in employees){
    if(employees[i].name=='Sneha'){
        employees[i].marks.splice(2,1,85)
    }
}
console.log(employees)
