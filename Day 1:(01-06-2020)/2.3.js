//Insert a new reader in the readers array for Nodejs.

function newReader(){
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
    //insert Reader
    
    library[0].['readers'] = [{name:"priya"},{age:'21'}];
    }
    
    //console.log(library[0].['readers']);
    }
    newReader();
    
    
    
    
    
