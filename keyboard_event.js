let inp=document.querySelector("input");

inp.addEventListener('keyup',function(event){
    console.log(event);
    console.log(event.key);
    console.log(event.code);
    console.log("Key Was Pressed");
});