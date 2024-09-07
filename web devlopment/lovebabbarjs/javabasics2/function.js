console.log("factory function code below")
function createRectangle(){   //factory function
    let rectangle ={
        length:2,
        breadth:3,

        draw: function(){
            console.log("drawing rectangle buddy");
        }
    };
    return rectangle;
}

function createSquare(len,bre){         //parameterised factory function
    let square ={
        length :len,
        breadth:bre,

        create(){
            console.log("drwaing square please wait");
        }
    }
    return square;
}

let rect = createRectangle();
let sq = createSquare(2,4);
rect.draw();
sq.create();
console.log(rect);
console.log(sq);



console.log("constructor function code below")

function CreaTerect(){
    
        this.length=5;
        this.breadth= 7;
       this.draws = function() {
          console.log("creating constructor rectangle");
}

    
}
let conf = new CreaTerect();
console.log(conf);


function CreateSquare(l,b){            // "parameterized constructor function"
    this.length=l;
    this.breadth=b;

    this.draw = function(){
        console.log("parameterized constructor function is called");
    }
}


let a= 10;
let b= a;
a++

console.log(a);
console.log(b);

let x ={
    value:2
}
let y = x;
x.value++;

console.log(x.value);
console.log(y.value);




let pranav = {
    name:"pranav",
    age:22,
    class:"MCA"
};

// object cloning by iteration
let shubham = {};

for(let key in pranav){
    shubham[key] = pranav[key];
}
for(let key of Object.entries(shubham)){
    console.log(key);
}



// object cloning by assigning 
let shym = ( {}, pranav );

console.log('shyam data ->'+ shym.name,shym.age)


// cloning by spread method

let aman = {...pranav};

for(let key of Object.entries(aman)){
    console.log("aman's data "+key);
}