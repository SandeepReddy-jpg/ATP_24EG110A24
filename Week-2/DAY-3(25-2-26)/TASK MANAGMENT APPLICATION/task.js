import {
  validateTitle,
  validatePriority,
  validateDueDate
} from "./validator.js";

let tasks = [];
//Add new task
function addTask(title, priority, dueDate) {

  if (!validateTitle(title)) {
    return "Invalid title!";
  }

  if (!validatePriority(priority)) {
    return "Invalid priority!";
  }

  if (!validateDueDate(dueDate)) {
    return "Invalid due date!";
  }

  let newTask = {
    id: tasks.length + 1,
    title: title,
    priority: priority,
    dueDate: dueDate,
    completed: false
  };

  tasks.push(newTask);

  return "Task added!";
}
//  Get all tasks
function getAllTasks() {
  return tasks;
}
// Mark task as complete
function completeTask(id) {
  for (let task of tasks) {
    if (task.id === id) {
      task.completed = true;
      return "Task completed!";
    }
  }

  return "Task not found!";
}
export{addTask,getAllTasks,completeTask}