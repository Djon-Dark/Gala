let actress = document.querySelector(".actress");
let director = document.querySelector(".director");
let model = document.querySelector(".model");
let imageContainers = document.querySelectorAll(".image-container");
// let gala = document.querySelector(".gala");
// let nikolic = document.querySelector(".nikolic");
let firstImgCont = document.querySelector(".firstImgCont");
let navlinks = document.querySelectorAll(".nav-link");

function addFadeUp(target, offset=0, delay=0){
    const events = ["load", "scroll"];
    function multipleEL(event){
        window.addEventListener(event, ()=>{
            const topDistance = target.getBoundingClientRect().top;
            const bottomDistance = target.getBoundingClientRect().bottom;
            const elementSize = target.clientHeight;
            if(topDistance >=0 && bottomDistance <= window.innerHeight + elementSize/2 + offset){
                if(event === "load"){
                    setTimeout(() => {
                        target.classList.add("fadeup");
                    }, delay); 
                } else {
                    target.classList.add("fadeup");
                }
                
            }
        })
    }
    events.forEach(event => multipleEL(event));
}


addFadeUp(actress, 0, 100); // actress and firstImgCont have to have same delay
addFadeUp(firstImgCont, 0, 100);

addFadeUp(director, -200);
addFadeUp(model);
imageContainers.forEach(image => addFadeUp(image,0,700));
// addFadeUp(gala);
// addFadeUp(nikolic,0,200);

// NAVLINKS STAGGERED FADE IN, ONE BY ONE
for(let i=0;i<navlinks.length;i++){
    addFadeUp(navlinks[i],0,i*100)
}