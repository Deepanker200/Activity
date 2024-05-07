//Events Listeners For Elements

/*
let p=document.querySelector('p');

p.addEventListener('click',function(){
    console.log("Paragraph was clicked");
});


let box=document.querySelector('.box');

box.addEventListener('mouseenter',function(){
    alert("Mouse Inside Box");
})

*/

//this in event listener

let btn=document.querySelector("button");

btn.addEventListener("click",function(){
    console.log(this.innerText);
   // console.dir(this.innerText);
    this.style.backgroundColor='green';
});