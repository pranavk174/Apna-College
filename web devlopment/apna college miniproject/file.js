const input = document.querySelector(".ipt");
const button = document.querySelector(".btn");
const lists = document.querySelector(".ull");




function insert(){
    let data = input.value;
    
    let newli = document.createElement("li")
    let newbtn = document.createElement("button");
    newbtn.textContent = "delete";
    newbtn.classList.add("del");
   
    newli.textContent=data;
    newli.appendChild(newbtn);
    lists.appendChild(newli);
   
    input.value = "";
}
button.addEventListener("click",insert);

lists.addEventListener("click",function(event){
        console.log(event.target);
        let target = event.target.nodeName;
        let par = event.target.parentElement;
        if(target === "BUTTON"){
            par.remove();
        }
        else{
            console.log("dont delete")
        }
       
})

let dbtns = document.querySelectorAll(".del");
// for(dbt of dbtns){
//     dbt.addEventListener("click",function delet(){  
//     let par = this.parentElement;
//     console.log(par);
//     par.remove();
// })
// }