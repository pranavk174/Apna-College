let x = (arr =>{
    let final = 0;
    let s = arr.length;
    for(let i= arr.length-1;i>=0;i--){
        final += arr[i];
    }
    let avg = Math.floor(final / s);
    return avg;
});
let arr = [2,4,1,6,8,9];
console.log(x(arr));




let isEven = (num => {
    if (num % 2 === 0){
        console.log(" its is even number ")
    }
    else{
        console.log("its odd number")
    }

})

isEven(2);



const object={message:'Hello,World!',
                logMessage(){
                    console.log(this.message)
                    ;}};
setTimeout(object.logMessage,1000);