let cursor = document.querySelector("#cursor")
let cursorBlur = document.querySelector("#cursor-blur")
let h4 = document.querySelectorAll("#nav h4")
let scrollDown = document.querySelector("#arrow")
let about = document.querySelector("#about");

scrollDown.addEventListener('click',()=>{
    about.scrollIntoView({behavior:"smooth"})
})

h4.forEach((e)=>{
    e.addEventListener("mouseenter",()=>{
        cursor.style.scale=2;
        cursor.style.border="0.5px solid #fff"
        cursor.style.backgroundColor = "transparent"
    })
    e.addEventListener("mouseleave",()=>{
        cursor.style.scale=1;
        cursor.style.border="0px solid #95C11E"
        cursor.style.backgroundColor = "#95C11E"
    })
})

document.addEventListener('mousemove',(dets)=>{
    cursor.style.left = dets.x+"px"
    cursor.style.top = dets.y+"px"
    cursorBlur.style.left = dets.x-200+"px"
    cursorBlur.style.top = dets.y-200+"px"
})




gsap.to("#nav",{
    backgroundColor:"#000",
    height:"100px",
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -25%",
        end:"top -70%",
        scrub:2
        
    }
})

gsap.from("#about img, #about-nepal",{
    y:90,
    opacity:0,
    duration:2,
    scrollTrigger:{
        trigger:"#about",
        scroller:"body",
        stark:"top 60%",
        end:"top 55%",
        scrub:2
    }
})

gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:4
    }

})
gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:4
    }

})

gsap.from("#page4 h1",{
y:50,
scrollTrigger:{
    trigger:"#page4 h1",
    scroller:"body",
    start:"top 75%",
    end:"top 70%",
    scrub:3
}
})