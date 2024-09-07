let arr=[2,5,1,8,2,9,2,0];
let input = 2;
for(let i =0;i< arr.length;i++){
    if(arr[i] == input){
        delete arr[i];
    }
    else{
        console.log(arr);
    }
}

let num = 2351749;
let spt = num.toString();
console.log(spt.length);

let num1 = 287152;
let final = 0;
while(num1 !=0){
let r = num1 % 10;
// final = final *10 +r
  final = final + r;
 num1 /= 10;
}
console.log("the sum is "+final);

const num2 = 287152
let sum = function(data){
    let final1 = 0;
    data = Math.abs(data);
    while(data !== 0){
        let r = data % 10;
        final1 += r;
        data = Math.floor(data/10);
        
    }
    console.log("the final sum of these numberr is "+ final1);
}

sum(num2);



let sum1 = function(data) {
    let final1 = 0; // Initialize final1 to store the sum of digits
    data = Math.abs(data);

    while(data !== 0) {
        let r = data % 10; // Get the last digit
        final1 += r; // Add the last digit to final1
        data = Math.floor(data / 10); // Remove the last digit and update data

        
    }
    console.log("The final sum of these numbers is " + final1);
}

// Example usage:
const exampleNumber = 287152;
sum1(exampleNumber);


let factorial  = function(data){
    let fact =1;
    let i = 1;
    while(i<=data){
        fact *= i;
        i++;
    }
    console.log(`the factorial of the ${data} is ${fact}`);
}

factorial(7);


let search = function(data){
    let large = arr[0]
    for(let i=0;i< data.length;i++){
       if(arr[i] > large){
        large = arr[i];
       }
    }
    console.log(`the largest number is ${large}`)
}

let arr2 =[2,6,1,7,0,9,19]
search(arr2);
