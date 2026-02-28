/*Exam portal simulator:
-----------------------------
When a student submits an exam:

        Immediately show: “Exam submitted successfully”
        After 2 seconds → show: “Evaluating answers…”
        After 4 seconds → show: “Result: Pass”*/

// Schedules a message to be displayed after 2 seconds (simulating evaluation delay)
setTimeout(()=>{
    console.log("evaluating answers..")
},2000)

// Schedules the result display after 4 seconds
setTimeout(()=>{
    console.log("Result:pass")
},4000)

// This executes immediately without waiting for setTimeout
console.log('exam submitted successfully')