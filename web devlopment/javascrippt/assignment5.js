let h =document.querySelector('.h4');


let b= document.querySelector('.btn');
let u= function update(){
    let num = Math.random();
    let key = num * 6;
    let final = Math.floor(key) + 1;
    h.textContent = final;
}
b.addEventListener('click',u);