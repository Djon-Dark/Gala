// SCROLL IGRANJE
// factor 10-stay in place, < faster, >10 reverse
function scrollanje(meta, factor){
    // meta.style.position = "absolute";
    document.addEventListener('scroll', ()=>{
        let distance = window.scrollY;
        meta.style.transform = `translateY(${distance * factor / 10}px)`; 
    })
}

scrollanje(document.querySelector('.glumica'),5);

// scrollanje(document.querySelector('.gala'), 5);
// scrollanje(document.querySelector('.nikolic'), 5);


// SCROLLANJE KAD JE U VIEWPORTU
function scrollanje2(target, speed, factor=3){
    // target.style.position = "absolute";
    // target.style.transform = `translateY(${-2*window.innerHeight}px)`;
    document.addEventListener('scroll', ()=>{
        // let distance = target.getBoundingClientRect().top;
        // let scrolled = window.scrollY;
        // let sum = Math.abs(scrolled / distance);
        // console.log("distance to top: "+distance);
        // console.log("distance to bottom: "+distancebottom);
        // console.log("scrolled: "+ scrolled);
        // console.log("sum: "+ sum);
        // target.style.transform = `translateY(${distance - (distance * factor / 10)}px)`; 
        const topDistance = target.getBoundingClientRect().top;
        const bottomDistance = target.getBoundingClientRect().bottom;
        // const elementSize = target.clientHeight;
        const bottomFast = Math.abs(bottomDistance - window.innerHeight);
        const bottomSlow = bottomDistance - window.innerHeight;
        if(topDistance >=0 && bottomDistance <= window.innerHeight){
            // target.style.transform = `translateY(${distance - (distance * factor / 10)}px)`; 
            // console.log("RADI"); 
            if(speed === "fast"){
                target.style.transform = `translateY(${-bottomFast*(factor/10)}px)`;
            } else {
                target.style.transform = `translateY(${-bottomSlow*(factor/10)}px)`;
            }
             
        }
    })
}
// scrollanje2(document.querySelector('.parallax', 15));
// scrollanje2(model, 15);
// document.querySelectorAll(".parallax").forEach(element => {
//     scrollanje2(element);
// });
// scrollanje2(document.querySelector(".glumica"));
scrollanje2(document.querySelector(".direktor"));
scrollanje2(document.querySelector(".modelica"));