// let prmce = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("hello i am first statment")},4000);
//     // resolve(4444);
//     reject(new Error("error aa gya bro.. sorry"))
// });

// console.log("second statement")



// let wada1 = new Promise((resolve,reject)=>{                 // promise
//     setTimeout(data =>{
//             console.log("wada1 poora hua")
//     },4000);
//     resolve(true);
// });

// let wada2 = wada1.then(new Promise((resolve,reject)=>{                  //nested promise
//         setTimeout(data =>{
//             console.log("wada2 poora hua")
//     },6000);
//         resolve(true);
//     }));

// wada2.then(new Promise((resolve,reject)=>{                // nested promise
//     setTimeout(data =>{
//         console.log("wada3 poora hua")
//         console.log("wada poora hua to ab niklo bhosdi ke jaan mat khaao")
// },8000);
//     resolve(true);
// }))



// async await function

async function utility(){
let def = async function(){
    console.log("hello every one");
    return 7;
}
def();


let def1 = await new Promise((res,rej)=>{
    setTimeout(data => {
            console.log("promise 1 executed");
            
    },2000)
    res(true);

})

let def2 = await new Promise((res,rej)=>{
    setTimeout(data => {
            console.log("promis 2 executed");
    },6000)
    res(true);
});


return [def1,def2];
}

utility();



async function api(){
    let data =  await fetch('https://jsonplaceholder.typicode.com/todos/1');                    // get api
    let output = await data.json();
    setTimeout(data =>{
        console.log(output);
    },1000)
}
api()


async function post(){
    let options ={
        method:'POST',
        body:JSON.stringify({
            title:'pranav',
            id:22,
            body: 'person'
        }),
        headers:{
            'content-type' : 'application/json; charset=UTF-8'
        },
    }
    let data =  await fetch('https://jsonplaceholder.typicode.com/todos/1',options);                    // post api
    let output = await data.json();
    setTimeout(data =>{
        console.log(output +" post code executed");
    },1000)
}
post()



for(let i=0;i * i< 25;i++){
    console.log("hello")
}

