let x = document.querySelector('.p1');
// .style property  
x.style.color = 'red'
x.style.backgroundColor = "blue"

// .cssText property
let b = document.querySelector(".p3");
b.style.cssText= 'color:green; background-color:black; font-size:1em;';

// setAttribute property   
let c = document.querySelector('.p4');
c.setAttribute("style","color:yellow; background-color:red;")

c.setAttribute('id' , 'id1');     // we can also set id or class ion any element 

let d = document.querySelector('.p4');
d.className; 


let y = document.querySelector('.d1');
let z = document.createElement('h2');
z.textContent = " heading 2";

y.appendChild(z);

y.insertAdjacentElement("afterEnd",z);
let a = document.createElement("h1");
a.textContent= "heading 1"
x.insertAdjacentElement("afterEnd",a);




