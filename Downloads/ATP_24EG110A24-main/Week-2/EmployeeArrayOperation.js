/*Test data:
const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];

Tasks:
    1. filter() employees from IT department
    2. map() to add:
            netSalary = salary + 10% bonus

    3. reduce() to calculate total salary payout
    4. find() employee with salary 30000
    5. findIndex() of employee "Neha"
*/
const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];

// Filter employees who belong to the IT department
let itemployees=employees.filter(employeeobj=>employeeobj.department=="IT")
console.log(itemployees)

// Increase each employee’s salary by 10% and create a new array with updated values
let netSalary=employees.map(employeeobj=>employeeobj.salary*1.10)
console.log(netSalary)

// Calculate the total salary expense of all employees
let totalsalary=employees.reduce((acc,employeeobj)=>acc+employeeobj.salary,0)
console.log(totalsalary)

// Find the employee whose salary is exactly 30000
let findemployee=employees.find(employeeobj=>employeeobj.salary==30000)
console.log(findemployee)

// Get the index position of employee named "Neha"
let index=employees.findIndex(employeeobj=>employeeobj.name=='Neha')
console.log(index)