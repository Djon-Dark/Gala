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
let imageContainers = document.querySelectorAll(".image-container");
imageContainers.forEach(image => addFadeUp(image,0,700));
addFadeUp(document.querySelector(".about-image"), 0, 100);

// ABOUT-TEXT STAGGERED FADE IN, ONE BY ONE
let aboutText = document.querySelector(".text-container").children;
for(let i=0;i<aboutText.length;i++){
    addFadeUp(aboutText[i],0,i*500)
}