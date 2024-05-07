//let btn=document.querySelector("button");
let btns=document.querySelectorAll("button");

//console.dir(btn);

/*
btn.onclick=function(){
    console.log("Button was clicked!");
    window.alert("Alert!!!");
};

*/


/*
for(btn of btns){
    btn.onclick=sayHello1;
    btn.onclick=sayHello2;  //It will be shown
    //btn.onmouseenter=sayHello;
}
*/

for(btn of btns){
    //btn.addEventListener("click",sayHello1);
    //btn.addEventListener("click",sayHello1);
    btn.addEventListener("dblclick",function(){
        console.log("You Double Clicked");
    });
    //btn.onmouseenter=sayHello;
}



function sayHello(){
    console.log("Hello");
};

function sayHello1(){
    alert("Hello1");
};

function sayHello2(){
    alert("Hello2");
};
//btn.onclick=sayHello;