// find an element in array using a function 
let arr=function(a,n){
    flag=0
    for(let i=0;i<a.length;i++){
        if(a[i]==n){
            return i;
            flag=1
            break
        }
    }
    if(flag==0){
        return "not found";
    }
}
let result=arr([1,2,3,4,5],4)
console.log(result)
 