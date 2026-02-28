/*.OTP Countdown Simulator (Console App)
------------------------------------
        
        Simulate OTP sending flow in Node.js:
        
        Show “OTP Sent Successfully”
        
        Start 10-second countdown
        
        Allow resend only after countdown ends*/

// Display confirmation message immediately after sending OTP
console.log("OTP sent successfully")
let seconds=10;

// Start a countdown timer that runs every 1 second
 let intervalID=setInterval(()=>{
    seconds--;
    console.log(`OTP can be resend after ${seconds}secs`)

    // When countdown reaches 0, allow resend and stop the interval
    if(seconds==0){
        console.log("resend OTP")
        clearInterval(intervalID)  
    }
},1000)