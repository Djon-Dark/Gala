// SCROLL IGRANJE
// factor 10-stay in place, < faster, >10 reverse
function scrollanje(meta, factor){
    // meta.style.position = "absolute";
    document.addEventListener('scroll', ()=>{
        let distance = window.scrollY;
        meta.style.transform = `translateY(${distance * factor / 10}px)`; 
    })
}

scrollanje(document.querySelector('.gala'), 5);
scrollanje(document.querySelector('.nikolic'), 5);


// SCROLLANJE KAD JE U VIEWPORTU
function scrollanje2(target, factor=10){
    // target.style.position = "absolute";
    target.style.transform = `translateY(${-2*window.innerHeight}px)`;
    document.addEventListener('scroll', ()=>{
        let distance = target.getBoundingClientRect().top;
        let scrolled = window.scrollY;
        let sum = Math.abs(scrolled / distance);
        console.log("distance to top: "+distance);
        // console.log("distance to bottom: "+distancebottom);
        // console.log("scrolled: "+ scrolled);
        // console.log("sum: "+ sum);
        // target.style.transform = `translateY(${distance - (distance * factor / 10)}px)`; 
        const topDistance = target.getBoundingClientRect().top;
        const bottomDistance = target.getBoundingClientRect().bottom;
        const elementSize = target.clientHeight;
        const bottom = bottomDistance - window.innerHeight;
        if(topDistance >=0 && bottomDistance <= window.innerHeight){
            // target.style.transform = `translateY(${distance - (distance * factor / 10)}px)`; 
            console.log("RADI"); 
            target.style.transform = `translateY(${-bottom*0.3}px)`; 
        }
    })
}

scrollanje2(model, 15);