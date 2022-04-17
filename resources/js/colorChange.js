function colorChange(target, r,g,b, invert){
    window.addEventListener("scroll", ()=>{
        const topDistance = target.getBoundingClientRect().top;
        const bottomDistance = target.getBoundingClientRect().bottom;
        const elementSize = target.clientHeight;
        if(topDistance >=0 && bottomDistance <= window.innerHeight + elementSize){
          document.querySelector("body").style.setProperty("--bkg-color", `rgb(${r},${g},${b})`); 
          if(invert === "y"){
            document.querySelector("body").style.setProperty("--text-color", `rgb(${255-r},${255-g},${255-b})`); 
          }
        }
    })
}
colorChange(document.querySelector(".actress"), 255,255,255,"y");
colorChange(document.querySelector(".model"), 20,20,20,"y");
// colorChange(document.querySelector(".director"), 250,223,247);
// colorChange(document.querySelector(".model"), 223,250,230);