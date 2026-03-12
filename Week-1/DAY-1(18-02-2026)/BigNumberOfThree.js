//finding biggest of 3 numbers
let a =10
let b=20
let c= 30
// Check if 'a' is greater than both 'b' and 'c'
if(a>b & a>c){
    console.log("a is greater number")
}
// If above condition fails, check whether 'b' is greater than both
else if(b>a & b>c){
    console.log("b is greater number")
}
// If neither 'a' nor 'b' is the largest, then 'c' must be the greatest
else{
    console.log("c is greater number")
}