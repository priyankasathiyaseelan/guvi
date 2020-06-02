//Print the price of Javascript book in console.

funtion JSprice(){
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
   
    var JSprice = library[1].price;
    console.log(JSprice);
    //price is 600
    }
    
    JSprice();

    
    
    
    
    
