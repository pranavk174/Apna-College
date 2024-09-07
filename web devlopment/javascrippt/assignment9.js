let input =document.createElement('input')
input.setAttribute('placeholder',"enter name")
let btn = document.createElement('button');
// btn.setAttribute('TEXT',"clik me")

btn.setAttribute('ID','btn1');

let div = document.createElement('div');

document.textContent="enter the name";
div.appendChild(input);
div.appendChild(btn);

document.body.appendChild(div);

let txt = document.querySelector('#btn1')
txt.style.cssText = "color:white; background-color:black; height:30px; width:80px; border-radius:5%;";
txt.textContent = 'click me';

let h = document.createElement('h1');
h.textContent="DOM Practice";
h.style.cssText = "color:purple; text-decoration:underline;"
div.appendChild(h);

let p = document.createElement('p');
p.textContent="Apna College Delta Practice";
let sp = p.split(' ');

let b = document.createElement('b');
b.textContent= sp[2];
p.appendChild(b);

div.appendChild(p)




