var cone = document.querySelector("#container")
var luve = document.querySelector("i")

cone.addEventListener("dblclick", function(){
    luve.style.transform = 'translate(-50%,-50%) scale(1)'
    luve.style.opacity = 0.8

    setTimeout(function(){
        luve.style.opacity = 0;
    },1000)

    setTimeout(function(){
        luve.style.transform = 'translate(-50%,-50%) scale(0)' 
    }, 2000);
})