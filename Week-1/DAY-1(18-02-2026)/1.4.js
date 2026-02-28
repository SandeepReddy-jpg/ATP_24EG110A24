//minimun number in an array
let a=[10,30,4,5]
let min=a[0]
for(let i=0;i<a.length;i++){
    if(min>a[i]){
        min=a[i]
    }
}
console.log(min)