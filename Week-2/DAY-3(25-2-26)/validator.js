// TODO: Export these validation functions
                      
                   /*   // 1. Validate task title (not empty, min 3 chars)
                      function validateTitle(title) {
                        // Your code here
                      }
                      
                      // 2. Validate priority (must be: low, medium, high)
                      function validatePriority(priority) {
                        // Your code here
                      }
                      
                      // 3. Validate due date (must be future date)
                      function validateDueDate(date) {
                        // Your code here
}*/
      // validator.js

// Validate title (not empty, minimum 3 characters)
// validator.js

// Validate title (not empty, minimum 3 characters)
 function validateTitle(title) {
  if (!title || title.length < 3) {
    return false;
  }
  return true;
}
// Validate priority (low, medium, high only)
function validatePriority(priority) {
  if (
    priority === "low" ||
    priority === "medium" ||
    priority === "high"
  ) {
    return true;
  }
  return false;
}
// Validate due date (must be future date)
 function validateDueDate(date) {
  let inputDate = new Date(date);
  let today = new Date();

  if (inputDate > today) {
    return true;
  }
  return false;
}
export {validateTitle,validatePriority,validateDueDate}