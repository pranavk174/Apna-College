
let b1 = document.querySelector('#b')
let h = document.querySelector("#h3");
let count = parseInt(h.innerText);

let increment =  () => { 
   count+=1;
   h.textContent = count;

}
let decrement = ()  =>
    {
       count-=1;
        h.textContent = count;
    }


// b2.addEventListener('click',increment);
// b1.addEventListener('click',decrement);



