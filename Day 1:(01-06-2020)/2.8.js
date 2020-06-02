//Print how many readers for js in console.

function JSreaders(){
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
    var count = 0;
    for(i=0;i<library[0].readers.length;i++){
    count = count +1;
    }
    console.log(count);
    }
    JSreaders();
