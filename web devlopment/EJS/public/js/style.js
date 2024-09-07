const h= document.querySelector("#f")

const click = ()=>{
    alert("clicked")
    h.textContent = "Following";
}
h.addEventListener("click", click);
