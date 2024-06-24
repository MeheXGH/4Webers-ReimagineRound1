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