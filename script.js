gsap.registerPlugin(ScrollTrigger);

// Initial continuous floating animation for the chili
gsap.to("#chili-floater", {
    y: -20,
    rotation: -3,
    duration: 2.5,
    ease: "sine.inOut",
    yoyo: true,
    repeat: -1
});

// Fade up text animations for initial load
gsap.from(".fade-up", {
    y: 50,
    opacity: 0,
    duration: 1.2,
    stagger: 0.2,
    ease: "power3.out",
    delay: 0.2
});

// Fade up sections on scroll
gsap.utils.toArray(".fade-up-section").forEach(section => {
    gsap.from(section, {
        scrollTrigger: {
            trigger: section,
            start: "top 85%",
        },
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    });
});

// Setup MatchMedia for responsive Parallax Chili
let mm = gsap.matchMedia();

mm.add("(min-width: 768px)", () => {
    // Desktop Timeline
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: "body",
            start: "top top",
            end: "bottom bottom",
            scrub: 1.5 // Smooth scrubbing
        }
    });

    tl.to("#traveling-chili", {
        // Hero to Dip (0 - 33% scroll)
        x: "25vw",
        y: "8vh",
        rotation: 160,
        scale: 0.8,
        ease: "power1.inOut"
    }, 0)
    .to("#traveling-chili", {
        // Dip to Blend (33% - 66% scroll)
        x: "-15vw",
        y: "-5vh",
        rotation: 260,
        scale: 0.6,
        opacity: 0.3,
        ease: "power1.inOut"
    }, 1)
    .to("#traveling-chili", {
        // Blend to Products (66% - 100% scroll)
        x: "20vw",
        y: "15vh",
        rotation: 375, // Spin a bit and land
        scale: 0.35,
        opacity: 1,
        ease: "power2.out"
    }, 2);
    
    return () => {
        // cleanup if needed
    };
});

mm.add("(max-width: 767px)", () => {
    // Mobile Timeline
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: "body",
            start: "top top",
            end: "bottom bottom",
            scrub: 1.5
        }
    });

    tl.to("#traveling-chili", {
        // Hero to Dip
        x: "0vw",
        y: "25vh",
        rotation: 180,
        scale: 0.65,
        ease: "power1.inOut"
    }, 0)
    .to("#traveling-chili", {
        // Dip to Blend
        x: "-35vw",
        y: "5vh",
        rotation: 220,
        scale: 0.4,
        opacity: 0.3,
        ease: "power1.inOut"
    }, 1)
    .to("#traveling-chili", {
        // Blend to Products
        x: "25vw",
        y: "22vh",
        rotation: 360,
        scale: 0.25,
        opacity: 1,
        ease: "power2.out"
    }, 2);
});
