let btn=document.querySelector("button");
//let btn1=document.querySelector("body");

btn.addEventListener("click",function (){
    let h3=document.querySelector("h3");
    let randomColor=getRandomColor();
    h3.innerText=randomColor;
    
    let div=document.querySelector("div");
    div.style.backgroundColor=randomColor;
   // btn1.style.backgroundColor=randomColor;
    console.log("Color Updated");
});

function getRandomColor(){
    let red=Math.floor(Math.random() * 255);
    let green=Math.floor(Math.random() * 255);
    let blue=Math.floor(Math.random() * 255);

    let color=`RGB(${red},${green},${blue})`;
    return color;
}



