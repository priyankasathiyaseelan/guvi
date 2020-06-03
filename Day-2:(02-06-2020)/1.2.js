//Extract and print the all the country name with capital name in console:

var request = new XMLHttpRequest();
request.open("GET",'https://restcountries.eu/rest/v2/all',true)
request.onload = function(){
var jsonData = JSON.parse(this.response);
for(i = 0;i < jsonData.length;i++){
  console.log(jsonData[i].name,"->"jsonData[i].capital);
  //print the country name and capital
}
}
request.send();
