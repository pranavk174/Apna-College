
const t1 = performance.now();
let d = document.createElement('div');
for(let i =0;i<100;i++){
    let p = document.createElement('p')
    p.textContent= 'this is Dom 3 Para '+i;
    d.appendChild(p);
}
document.body.appendChild(d);
const t2 = performance.now();
let hh1 = document.createElement('h2');
hh1.textContent = 'total loading time '+ (t2-t1);





const t3 = performance.now();
for(let i =0;i<100;i++){
    let p= document.createElement('p');
    p.textContent= "this is para "+i;

    document.body.appendChild(p);
}
const t4 = performance.now();
let hh2 = document.createElement('h2');
hh2.textContent = 'total loading time '+ (t4-t3);




const t5 = performance.now();

let f = document.createDocumentFragment();
for(let i=0;i<100;i++){
    let p = document.createElement('p');
    p.textContent = 'this is document Fragment para '+i;
    f.appendChild(p);
} 
document.body.appendChild(f);
const t6 = performance.now();
let hh = document.createElement('h2');
hh.textContent = 'total loading time '+ (t6-t5);


document.body.appendChild(hh1);         // frst code execution time
document.body.appendChild(hh2);         // second code execution time
document.body.appendChild(hh);          // third  code execution time





