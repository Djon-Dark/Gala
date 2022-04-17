// function fadeOut(target, offset=300){
//     document.addEventListener("scroll", ()=>{
//         let scrolled = window.scrollY;
//         let factor = 1-(scrolled/offset);
//         target.style.opacity = factor;
//     })
// }
function fadeOut(target, offset=300){
    document.addEventListener("scroll", ()=>{
        if(target.style.opacity <= 1 && target.style.opacity >= 0){
            let scrolled = window.scrollY/offset;
            // console.log("scrolled: "+scrolled);
            let factor = 1-scrolled;
            target.style.opacity = factor;
            if(target.style.opacity > 1){
                target.style.opacity = 1;
            }
            if(target.style.opacity < 0){
                target.style.opacity = 0;
            }
        }
    })
}

fadeOut(document.querySelector(".gala"));
fadeOut(document.querySelector(".nikolic"));
fadeOut(document.querySelector(".nav-list"));