<!DOCTYPE html>
<html>
<body>

<script>
	var clk=document.createElement("button");
	clk.innerHTML="SUBMIT";
	clk.style.position="left";
	clk.style.left="50px";
	clk.style.width="10%";
	clk.style.height="20px";
	document.body.appendChild(clk);
	clk.setAttribute("onclick","myFunction()");

	var num=document.createElement("num");
	num.style.fontSize="30px";
	document.body.appendChild(num);

function myFunction() {
  var arr=[];
  for(var i=0;i<5;i++){
  var a = Math.floor((Math.random() * 9) + 1 );
  var b=0;
  arr.push(a);
  if (arr.length>1) {
   for(var j=0;j<arr.length-1;j++){
     if(arr[i]==arr[j]){
         arr.pop();
         b+=1;
         break;
     }
   }
   if(b>0){
     i--;
   }
  }
}

  num.innerHTML=arr.join("");
  }
</script>

</body>
</html>
