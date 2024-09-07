
// declarative function
run()
function run(){
    console.log("running");
}
// assignment function -> isme function ko ek variable me assign kr diya jaata hai
let move = function walk(){
    console.log("walking")
}
move();    // assigntment function ko ham declaration k baad hi call kr skte hai...
function sum(a,b){
    // console.log(arguments);
    let total =0;
        for(let value of arguments){
            total += value
    }
    console.log(total);
}
sum(2,5,6,2,1,9,4,7,9,3);


// REST operator -> ye parameters ko handle krne k liye use hota hai.. ye paramters ko array me store kr leta hai
function minus(...arg){
    console.log(arg);
}
minus(3,1,5,2,5,9,0)



function divide(x,y,...arg){                // isme starting k 2 parameter me store honge and last k bache hue saare prameters array me store ho jayenge  & last thing to know that  rest operator hmesha last me use hoga.. iske baad koi parameter nhi lg skta
    console.log(arg);
    console.log(x+"/"+y+"/ ");
}
divide(3,1,5,2,5,9,0)


// function with default parameters
function add(x,y=7,z){          // default paraeter me ek rule hai ki agr hm 'y' ko default parameter bna diye to uske baad wale saare ko default paramtere bnana hoga wrna code required out put ni dega

    let i = x*y*z/100;
    console.log(i);
}
add(1000,4,3);      // but we have a hack to use default parameter.. ham paramter ke jagah 'undefined' likh k code execute kr skte hai

add(3000,undefined,5)       // ye hack se ham kr skte hai use

//GETTER and SETTER
let person ={
    firstName:"pranav",
    lastName:"kumar",

    get fullName(){
        return ` ${person.firstName} ${person.lastName}`
    },
    set fullName(value){
        // if(typeof value !== String){
            // throw new Error("please enter a string value")
        // }
        let name = value.split(' ');
        this.firstName = name[0];
        this.lastName= name[1];
    }
}

// person.fullName="shubham kumar"             // setting new value using settor method

// console.log(person.fullName)



// TRY & CATCH (exception handling)
try{
        person.fullName="shubham kumar"
        console.log(person.fullName);
}
catch(e){
    console.log(e) 
    // alert(e);
}

let arr5=[7,6,4,2,0,9]
let sum2 = arr5.reduce((acc,current)=> acc+current)         //reducing array

console.log(sum2)


