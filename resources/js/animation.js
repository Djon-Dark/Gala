let actress = document.querySelector(".actress");
let director = document.querySelector(".director");
let model = document.querySelector(".model");
let imageContainers = document.querySelectorAll(".image-container");
let firstImgCont = document.querySelector(".firstImgCont");
let navlinks = document.querySelectorAll(".nav-link");
let imgala = document.querySelector(".imgala");
let aboutText = document.querySelector(".about-text");


// FADE UP ANIMATION, CHECKS IF TARGET IN VIEW ON LOAD AND THEN ON SCROLL
function addFadeUp(target, offset=0, delay=0){
    // check first if the target exists, otherwise the function would throw an error
    if(target){
        // Set opacity 0 if JS loads. If JS fails to load, page will still work and be visible.
        target.style.opacity = 0;
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
}

// FUNCTION INITIALIZATION 
addFadeUp(actress, 0, 100);
addFadeUp(director, -200);
addFadeUp(model);
imageContainers.forEach(image => addFadeUp(image,0,700));
addFadeUp(imgala, 0, 500);
addFadeUp(aboutText, 0,1300);
addFadeUp(document.querySelector(".about-me-img"), 0, 1500);

// NAVLINKS STAGGERED FADE IN, ONE BY ONE
for(let i=0;i<navlinks.length;i++){
    addFadeUp(navlinks[i],0,i*100)
}