var tl = gsap.timeline();

tl.to(".slide",{
    scrollTrigger:{
        trigger:".hz-scroll",
        start:"top top",
        end: "bottom bottom",
        // markers: true,
        scrub: 1
    },
    xPercent: -200,
    // ease: power4
})



tl.from(".lhs",{
    x: -500,
    stagger: 0.1,
    duration: 1,
    scrollTrigger:{
        trigger:".page6",
        start:"top 30%",
        end: "30% 30%",
        // markers: true,
        scrub: 1
    },
} ,"a")

tl.from(".rhs",{
    x: 500,
    stagger: 0.1,
    duration: 1,
    scrollTrigger:{
        trigger:".page6",
        start:"top 30%",
        end: "30% 30%",
        // markers: true,
        scrub: 1
    },
},"a")

gsap.to(".h-img",{
    scrollTrigger:{
        trigger:".h-img",
        start:"top -10%",
        end: "30% -15%",
        // markers: true,
        scrub: 1
    },
    rotate: "45%",
    duration: 1,
    ease: "cubic-bezier(0.61, 1, 0.88, 1)",
    y: "5%",
})

gsap.from(".ft-img",{
    x: "-100%",
    scrollTrigger:{
        trigger:".ft-img",
        start:"top 50%",
        end: "top 40%",
        // markers: true,
        scrub: 1
    },
    duration: 1,
    ease: "cubic-bezier(0.61, 1, 0.88, 1)",
})