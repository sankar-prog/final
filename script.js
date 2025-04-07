const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// // ✅ Register GSAP Plugins
// gsap.registerPlugin(ScrollTrigger, TextPlugin);

// // 🎭 **Home Image: Gentle Fade-In with Rotation**
// gsap.from("#home img", {
//     opacity: 0,
//     rotateY: 180,
//     scale: 0.5,
//     duration: 2.5,
//     ease: "power4.out"
// });

// // 🎇 **Home Name (h1): Fancy Typing Effect + Gentle Wave Motion**
// gsap.from("#home h1", {
//     opacity: 0,
//     scale: 1.5,
//     y: 10,
//     duration: 2,
//     delay: 0.5,
//     ease: "expo.out"
// });

// // 🔄 **Repeating Floating Wave Effect for Name**
// gsap.to("#home h1", {
//     y: 10,
//     duration: 2,
//     repeat: -1,
//     yoyo: true,
//     ease: "sine.inOut"
// });

// // 🌊 **About Section: Wave-Like Sliding Animation**
// gsap.from(".about_section p", {
//     scrollTrigger: {
//         trigger: ".about_section",
//         start: "top 85%",
//         toggleActions: "play none none reverse",
//     },
//     opacity: 0,
//     x: -100,
//     duration: 2,
//     ease: "power3.out"
// });

// gsap.from(".box", {
//     scrollTrigger: {
//         trigger: ".list",
//         start: "top 90%",
//         toggleActions: "play none none reverse",
//     },
//     opacity: 0,
//     scale: 0.8,
//     duration: 1.5,
//     stagger: 0.2,
//     ease: "power2.out"
// });

// // 🎬 Projects: Simple Slide-Up & Fade Effect
// gsap.from(".pro-box", {
//     scrollTrigger: {
//         trigger: ".pro",
//         start: "top 90%",
//         toggleActions: "play none none reverse",
//     },
//     opacity: 0,
//     y: 50,
//     duration: 1.5,
//     stagger: 0.3,
//     ease: "power2.out"
// });
// // 🎯 Contact Form Elements Animation
// gsap.from("form input, form button", {
//     opacity: 0,
//     y: 30,
//     duration: 0.8,
//     stagger: 0.2,
//     ease: "power2.out",
//     scrollTrigger: {
//       trigger: "#contact",
//       start: "top 80%",
//       toggleActions: "play none none reverse"
//     }
//   });
  
//   // 🌟 Footer Icons Animation
//   gsap.from(".footer a", {
//     opacity: 0,
//     scale: 0.5,
//     duration: 0.8,
//     stagger: 0.2,
//     ease: "power2.out",
//     scrollTrigger: {
//       trigger: "#contact",
//       start: "top 90%",
//       toggleActions: "play none none reverse"
//     }
//   });
// ✅ Register GSAP Plugins
// gsap.registerPlugin(ScrollTrigger, TextPlugin);

// // 🎭 Home Image: Gentle Fade-In with Rotation
// gsap.from("#home img", {
//   opacity: 0,
//   rotateY: 180,
//   scale: 0.5,
//   duration: 2.5,
//   ease: "power4.out"
// });

// // 🎇 Home Name (h1): Appear + Wave Loop
// gsap.from("#home h1", {
//   opacity: 0,
//   scale: 1.5,
//   y: 10,
//   duration: 2,
//   delay: 0.5,
//   ease: "expo.out"
// });

// gsap.to("#home h1", {
//   y: 10,
//   duration: 2,
//   repeat: -1,
//   yoyo: true,
//   ease: "sine.inOut"
// });

// // 🌊 About Section: Slide-In
// gsap.from(".about_section p", {
//   scrollTrigger: {
//     trigger: ".about_section",
//     start: "top 85%",
//     toggleActions: "restart pause resume reverse", // ✅ ensures replay on re-scroll
//     scrub: false,
//   },
//   opacity: 0,
//   x: -100,
//   duration: 2,
//   ease: "power3.out"
// });

// // 💠 Skills Boxes: Scale Up
// gsap.from(".box", {
//   scrollTrigger: {
//     trigger: ".list",
//     start: "top 90%",
//     toggleActions: "restart pause resume reverse", // ✅ for repeat effect
//     scrub: false
//   },
//   opacity: 0,
//   scale: 0.8,
//   duration: 1.5,
//   stagger: 0.2,
//   ease: "power2.out"
// });

// // 🎬 Projects Boxes: Slide Up
// gsap.from(".pro-box", {
//   scrollTrigger: {
//     trigger: ".pro",
//     start: "top 90%",
//     toggleActions: "restart pause resume reverse", // ✅ repeat on scroll
//     scrub: false
//   },
//   opacity: 0,
//   y: 50,
//   duration: 1.5,
//   stagger: 0.3,
//   ease: "power2.out"
// });

// // 📩 Contact Form Inputs & Button
// gsap.from("form input, form button", {
//   opacity: 0,
//   y: 30,
//   duration: 0.8,
//   stagger: 0.2,
//   ease: "power2.out",
//   scrollTrigger: {
//     trigger: "#contact",
//     start: "top 80%",
//     toggleActions: "restart pause resume reverse" // ✅ enables scroll repeat
//   }
// });

// // 🌟 Footer Social Icons
// gsap.from(".footer a", {
//   opacity: 0,
//   scale: 0.5,
//   duration: 0.8,
//   stagger: 0.2,
//   ease: "power2.out",
//   scrollTrigger: {
//     trigger: "#contact",
//     start: "top 90%",
//     toggleActions: "restart pause resume reverse" // ✅ repeat on scroll
//   }
// });
gsap.registerPlugin(ScrollTrigger, TextPlugin);

// 🎭 Home Image with ScrollTrigger
gsap.from("#home img", {
  scrollTrigger: {
    trigger: "#home",
    start: "top 90%",
    toggleActions: "play none restart reverse",
    once: false
  },
  opacity: 0,
  rotateY: 180,
  scale: 0.5,
  duration: 2.5,
  ease: "power4.out"
});


// // 🎇 Home H1 with ScrollTrigger
// gsap.from("#home h1", {
//   scrollTrigger: {
//     trigger: "#home",
//     start: "top 85%",
//     toggleActions: "play none restart reverse",
//     once: false
//   },
//   opacity: 0,
//   scale: 1.5,
//   y: 10,
//   duration: 2,
//   delay: 0.5,
//   ease: "expo.out"
// });

// // 🔁 Floating repeat (no ScrollTrigger needed)
// gsap.to("#home h1", {
//   y: 10,
//   duration: 2,
//   repeat: -1,
//   yoyo: true,
//   ease: "sine.inOut"
// });
// 🎇 Home H1: Blur + Fade In + Zoom
gsap.from("#home h1", {
    scrollTrigger: {
      trigger: "#home",
      start: "top 85%",
      toggleActions: "play none restart reverse",
      once: false
    },
    opacity: 0,
    scale: 1.5,
    y: 10,
    filter: "blur(15px)",
    duration: 2,
    delay: 0.5,
    ease: "expo.out"
  });
  
  // 🔁 Floating repeat (no ScrollTrigger needed)
  gsap.to("#home h1", {
    y: 10,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });
  
  // 🌟 Home H3: Blur + Slide + Skew
  gsap.from("#home h3", {
    scrollTrigger: {
      trigger: "#home",
      start: "top 85%",
      toggleActions: "play none restart reverse",
      once: false
    },
    opacity: 0,
    y: 50,
    skewX: 10,
    filter: "blur(10px)",
    duration: 1.8,
    delay: 0.7,
    ease: "power2.out"
  });
  
// 🌊 About Paragraph
gsap.from(".about_section p", {
  scrollTrigger: {
    trigger: ".about_section",
    start: "top 85%",
    toggleActions: "play none restart reverse",
    once: false
  },
  opacity: 0,
  x: -100,
  duration: 2,
  ease: "power3.out"
});

// 💠 Skill Boxes
gsap.from(".box", {
  scrollTrigger: {
    trigger: ".list",
    start: "top 90%",
    toggleActions: "play none restart reverse",
    once: false
  },
  opacity: 0,
  scale: 0.8,
  duration: 1.5,
  stagger: 0.2,
  ease: "power2.out"
});

// 🎬 Projects Boxes
gsap.from(".pro-box", {
  scrollTrigger: {
    trigger: ".pro",
    start: "top 90%",
    toggleActions: "play none restart reverse",
    once: false
  },
  opacity: 0,
  y: 50,
  duration: 1.5,
  stagger: 0.3,
  ease: "power2.out"
});

// 📩 Contact Form
gsap.from("form input, form button", {
  scrollTrigger: {
    trigger: "#contact",
    start: "top 80%",
    toggleActions: "play none restart reverse",
    once: false
  },
  opacity: 0,
  y: 30,
  duration: 0.8,
  stagger: 0.2,
  ease: "power2.out"
});

// 🌟 Footer Icons
gsap.from(".footer a", {
  scrollTrigger: {
    trigger: "#contact",
    start: "top 90%",
    toggleActions: "play none restart reverse",
    once: false
  },
  opacity: 0,
  scale: 0.5,
  duration: 0.8,
  stagger: 0.2,
  ease: "power2.out"
});
