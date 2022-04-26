// USE THIS IF ELEMENT IS IN VIEW ON PAGE LOAD, TO AVOID INITIAL STUTTER
function scrollanje(target, factor){
    document.addEventListener('scroll', ()=>{
        const topDistance = target.getBoundingClientRect().top;
        const bottomDistance = target.getBoundingClientRect().bottom;
        let distance = window.scrollY;
        if(topDistance >=0 || bottomDistance > 0){
            target.style.transform = `translateY(${distance * factor / 10}px)`; 
        }
    })
}

// scrollanje(document.querySelector('.glumica'),5);

// USE THIS TO APPLY PARALLAX SCROLL ONLY WHEN ELEMENT IS FULLY IN VIEW
// - negative factor will increase scrolling speed
function scrollanje2(target, speed, factor=3){
    document.addEventListener('scroll', ()=>{
        const topDistance = target.getBoundingClientRect().top;
        const bottomDistance = target.getBoundingClientRect().bottom;
        const bottomFast = Math.abs(bottomDistance - window.innerHeight);
        const bottomSlow = bottomDistance - window.innerHeight;
        if(topDistance >=0 && bottomDistance <= window.innerHeight){
            if(speed === "fast"){
                target.style.transform = `translateY(${-bottomFast*(factor/10)}px)`;
            } else {
                target.style.transform = `translateY(${-bottomSlow*(factor/10)}px)`;
            }    
        }
    })
}

// USE THIS TO APPLY PARALLAX SCROLL ONLY WHEN ELEMENT IS IN VIEW WITH ACTIVATION THRESHOLD
// - negative factor will increase scrolling speed
function scrollanje3(target, speed, factor=3, topThreshold=0, bottomThreshold=0){ // PROBAJ UBACIT UVJET AKO JE ON LOAD U VIEWPORTU DA DRUGACIJE TRANSLATIRA
    document.addEventListener('scroll', ()=>{
        const topDistance = target.getBoundingClientRect().top;
        const bottomDistance = target.getBoundingClientRect().bottom;
        const bottomFast = Math.abs(bottomDistance - window.innerHeight);
        const bottomSlow = bottomDistance - window.innerHeight;
        if(topDistance >=-topThreshold && bottomDistance <= window.innerHeight+bottomThreshold){
            if(speed === "fast"){
                target.style.transform = `translateY(${-bottomFast*(factor/10)}px)`;
            } else {
                target.style.transform = `translateY(${-bottomSlow*(factor/10)}px)`;
            }    
        }
    })
}

// JS MEDIA QUERY - set different scroll speed on mobile
if(window.matchMedia("(max-width:700px)").matches){
    // mobile view
    scrollanje3(document.querySelector('.glumica'), 1,2,200,200);
    scrollanje3(document.querySelector(".direktor"),1,0.5,200, 200);
    scrollanje3(document.querySelector(".modelica"),1,1.5,200, 200); 
} else {
    // desktop view
    scrollanje3(document.querySelector('.glumica'), 1,2,0,0);
    scrollanje3(document.querySelector(".direktor"),1,2,200, 200);
    scrollanje3(document.querySelector(".modelica"),1,7,200,200);
}

// NE RADI
// function inView(target){
//     document.addEventListener("load", ()=>{
//         console.log("LOADED");
//         const topDistance = target.getBoundingClientRect().top;
//         const bottomDistance = target.getBoundingClientRect().bottom;
//         if(topDistance >=0 || bottomDistance > 0){
//             scrollanje(target,5);

//         } else {
//             if(window.matchMedia("(max-width:700px)").matches){
//                 scrollanje3(target, 1,2,200,200);
//             } else {
//                 scrollanje3(target, 1,2,0,0);
//             }
//         }
//     })
// }

// inView(document.querySelector('.glumica'));