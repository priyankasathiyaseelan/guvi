const newArray=[1,3,2,5,10];
const myprime=newArray.filter(num=>{
    for(let i=2;i<num;i++){
        if(num%i===0)
        {
            return false;
        }
    }
    return num!==1;
});
console.log(myprime);
