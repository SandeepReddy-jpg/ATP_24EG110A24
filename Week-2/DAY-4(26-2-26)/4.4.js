/*Given Data:
              const user = {
                id: 101,
                name: "Ravi",
                preferences: {
                  theme: "dark",
                  language: "en"
                }
              };

🎯 Task
    1. Create a shallow copy of user
    2. Change:
          i. name in the copied object
          ii. preferences.theme in the copied object
          iii .Log both original and copied objects
          iv. Observe what changes and what doesn’t*/
 const user = {
             id: 101,
            name: "Ravi",
            preferences: {
            theme: "dark",
            language: "en"
            }
          };     

// Create a shallow copy of the user object using spread operator
copyuser={...user}

// Modify properties in the copied object
copyuser.name="bhanu"

// Changing nested property (this affects original due to shallow copy)
copyuser.preferences.theme="light"

console.log(user)
console.log(copyuser)