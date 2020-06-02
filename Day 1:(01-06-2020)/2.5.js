//Find the datatype of author age in Nodejs Object.

function dataType(){
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
    
    //find dataType in author age
    var authorage = library[1].authordetails.age;
    console.log(typeof(age));
    
    }
    
    datatype();
