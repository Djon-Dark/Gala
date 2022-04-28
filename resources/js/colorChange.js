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
function colorChange2(target, r,g,b, invert){
    window.addEventListener("scroll", ()=>{
        const topDistance = target.getBoundingClientRect().top;
        const bottomDistance = target.getBoundingClientRect().bottom;
        const elementSize = target.clientHeight;
        if(topDistance >=0 && bottomDistance <= window.innerHeight){
          document.querySelector("body").style.setProperty("--bkg-color", `rgb(${r},${g},${b})`); 
          if(invert === "y"){
            document.querySelector("body").style.setProperty("--text-color", `rgb(${255-r},${255-g},${255-b})`); 
          }
        }
    })
}

// BIJELO CRNO
// colorChange(document.querySelector(".glumica"), 255,255,255,"y");
// colorChange(document.querySelector(".modelica"), 20,20,20,"y");

// colorChange2(document.querySelector("video"), 20,20,20);
// colorChange(document.querySelector(".direktor"), 250,223,247);
// colorChange(document.querySelector(".modelica"), 50,50,50);

// INTERSECTION OBSERVER
function observerPlusOne(targets, vanjskiArgument){
  const io = new IntersectionObserver(targets => {
    targets.forEach(target => {
        if(target.intersectionRatio > 0){
          console.log(vanjskiArgument);
        }
    });
  }, {threshold: 0.5});

  io.observe(targets);
}

// observerPlusOne(document.querySelector(".direktor"), 23);