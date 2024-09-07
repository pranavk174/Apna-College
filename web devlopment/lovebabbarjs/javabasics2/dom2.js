let bt = document.querySelector(".b1")
let ct = document.querySelector('body')
let btn = document.querySelector('.b2');

let fn = function fun(){
    // alert("button clicked");
    ct.style.cssText = " background:black; color:white; transition:0.5s;"
    
}

let ft = function func(){
    ct.style.cssText = "background:white; color:black; transition:0.5s;"
}


bt.addEventListener('click',fn );       // syntax Element.addEventListener(event,function())

btn.addEventListener('click',ft);


// remove event 
// btn.removeEventListener('click',ft);    // the function must be same as used in addeventListener



// Event object
let bt8 = document.querySelector('.b7')

bt8.addEventListener('click',function cll(eve){             //this event object store all the informationn about the event
    console.log(eve)
})


// Defualt actions
let links = document.querySelectorAll('a');
let link = links[1];
link.addEventListener('click',function(event){
    event.preventDefault();
    alert("this link cant be clicked")
})


//Avoid too many Listeners best way is to declare Listener separately and use it in elements

let ev = function events(event){
    alert(event.target.textContent);                // access text contentt through this property
}
let ab = document.createElement('div');
ab.addEventListener('click',ev,true);
for(let i=0;i<100;i++){
    let pa = document.createElement('p')
    pa.textContent="this is paragraph "+i;

    

    ab.appendChild(pa);

}
document.body.appendChild(ab);


// NodeList property
let wrp = document.querySelector("#wrapper");

wrp.addEventListener('click',function(event){
    if(event.target.nodeName === 'SPAN'){
    alert('you clicked on span element'+ event.target.textContent);                // access text contentt through this property
}
});