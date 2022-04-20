// USE THIS IF ELEMENT IS IN VIEW ON PAGE LOAD, TO AVOID INITIAL STUTTER
function scrollanje(meta, factor){
    // meta.style.position = "absolute";
    document.addEventListener('scroll', ()=>{
        let distance = window.scrollY;
        meta.style.transform = `translateY(${distance * factor / 10}px)`; 
    })
}

scrollanje(document.querySelector('.glumica'),5);

// USE THIS TO APPLY PARALLAX SCROLL ONLY WHEN IN VIEW
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

scrollanje2(document.querySelector(".direktor"));
scrollanje2(document.querySelector(".modelica"));