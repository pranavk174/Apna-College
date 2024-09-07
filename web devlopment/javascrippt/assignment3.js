let arr = [2,6,1,8,3,0,7,4];
let sliced = arr.slice(arr.length-3);
console.log(sliced);


let Name = 'pranav_kumar';
if(Name.length == 0){
    console.log("blank string")
}
else{
    console.log('string is not blank');
}

let check = function casecheck(char, index){
    if(index <0 || index >=char.length){
        console.log("index out of bound");
        return;
    }
    else{
        if(char[index] == char[index].toLowerCase() && char[index] != char[index].toUpperCase()){
            console.log("its a lower case index")
        }
        else{
            console.log("its not a lower case index")
        }
    }
}
let Fname = 'praNav_kumar';
check(Fname,3);