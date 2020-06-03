//Extract and print all the country name with the flag URL in console

var request=new XMLHttpRequest();
request.open("GET",'https://restcountries.eu/rest/v2/all',true)
request.onload=function(){
    var jsondata=JSON.parse(this.response);
    for(i = 0;i < jsondata.length;i++)
    {
        console.log(jsondata[i].name);
        //print countries name
    }
}
request.send();
