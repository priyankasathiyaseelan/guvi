//Update the count of Person 2 inside readers Array in Javascript

function person2counts(){
var library=[
    {
        title: "javascript",
        price: 500,
        readers:[
            {
                name: "person 1",
                count: 300
            },
            {
                name: "person 2",
                count: 400
            }
            ],
            authordetails:{
                name: "Raj",
                age: 40
            },
    },
    {
        title: "node js",
        price: 600,
        readers:[],
         authordetails:{
                name: "Raj",
                age: 40
            }
    }
    
    ]
    //update count as 300
     var count = library[0].readers[1].count = 300;
    //console.log(count);
}
person2counts();
