//Extract and print all the country name with alpha3Code and population in console.

var request = new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true)
request.onload = function(){
var jsonData = JSON.parse(this.response);
for(i = 0;i < jsonData.length;i++){
  console.log(jsonData[i].name,"->",jsonData[i].alpha3Code,"and the population is",jsonData[i].population)
}
}
request.send();
