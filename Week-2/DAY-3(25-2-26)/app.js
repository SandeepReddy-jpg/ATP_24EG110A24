import {
  addTask,
  getAllTasks,
  completeTask
} from "./task.js";
// Add tasks
console.log(addTask("coding", "high", "2026-12-30"));
console.log(addTask("python", "medium", "2026-06-10"));
console.log(addTask("Go", "low", "2022-01-01"));  // Invalid example
// Show all tasks
console.log("\nAll Tasks:");
console.log(getAllTasks());
// Complete first task
console.log("\nCompleting Task 1...");
console.log(completeTask(1));
// Show updated tasks
console.log("\nUpdated Tasks:");
console.log(getAllTasks());