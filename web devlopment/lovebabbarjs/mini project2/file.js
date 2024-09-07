let modal =document.querySelector(".modal");
let ovr = document.querySelector("#over")
let main =document.querySelector("#main");
let content = document.querySelector("#content")



function activate(){
   
    modal.classList.add("active");
    ovr.style.display= "block";
    content.classList.add("b")
    console.log("activated")

}

function deactivate(){
    ovr.classList.add("active");
    modal.classList.remove("active");
    content.classList.remove("b")
    ovr.style.display= "none";
    console.log("deactivated")
}



