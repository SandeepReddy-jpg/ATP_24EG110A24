//finding the biggest of 3 numbers using function
function bignumber(a,b,c){
    if(a>b && a>c){
        console.log(a)
    }
    else if(b>a && b>c){
        console.log(b)
    }
    else{
        console.log(c)
    }
}
let result=bignumber(2,3,5)