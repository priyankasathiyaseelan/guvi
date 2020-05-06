const readline=require('readline');
const inp=readline.createInterface({input:process.stdin});
const n=[];
inp.on('line',(data)=>{
    n.push(data);
});
inp.on('close',()=>{
    var a=[];
    var b=[];
    a=n[0].split(" ");
    var c=parseInt(n[1]);
    function index(){
        for(var i=0;i<a.length;i++){
            if(parseInt(a[i])==c){
                return i;
            }
        }
    }
    var res=index();
    console.log(res);
});
