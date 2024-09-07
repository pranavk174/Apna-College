const butn =document.querySelector(`#b${post}`);
const element = document.querySelector(`#${post}`)
const box = document.querySelector(".box");
let del = ()=>{
    box.removeChild(element)
    console.log("element deleted");
}

butn.addEventListener("click", del);