// GSAP START
// gsap.registerPlugin(ScrambleTextPlugin) ;

document.querySelector("#main").addEventListener("mousemove", function (dets) {
  gsap.to("#cursor", {
    x: dets.x,
    y: dets.y,
    duration: 2.5,
    ease: "elastic.out(1.75,0.75)",
  });
});

document
  .querySelector("#fullstack")
  .addEventListener("mouseenter", function (dets) {
    gsap.to("#cursor", {
      scale: 2,
    });
  });
document
  .querySelector("#fullstack")
  .addEventListener("mouseleave", function (dets) {
    gsap.to("#cursor", {
      scale: 1,
      color: "red",
    });
  });

document
  .querySelector("#letsconnect")
  .addEventListener("mouseenter", function (dets) {
    console.log("dbaya gya");
    gsap.to("#arrow", {
      x:-100,
      y:50,
      rotate: "270",
    });
  });
  document
  .querySelector("#letsconnect")
  .addEventListener("mouseleave", function (dets) {
    console.log("hatay gya");
    gsap.to("#arrow", {
      x:0,
      y:0,
      rotate: "0",
    });
  });

gsap.from("#anser", {
  y: -50,
  delay: 0.2,
  scale: 0.5,
  opacity: 0,
  duration: 0.5,
});

gsap.from("#nav-list li", {
  y: -50,
  delay: 0.7,
  opacity: 0,
  duration: 0.3,
  stagger: 0.2,
});

// timeline
var tl = gsap.timeline();
tl.from("#helloiam", {
  delay: 1.2,
  x: -500,
  scale: 0,
  opacity: 0,
  duration: 0.3,
  stagger: 3,
});
tl.from("#anserahmed", {
  // delay: 1.2,
  x: -500,
  scale: 0,
  opacity: 0,
  duration: 0.3,
  stagger: 0.2,
});
tl.from("#fullstack", {
  // delay: 1.2,
  x: -3,
  scale: 0,
  opacity: 0,
  duration: 0.3,
  // stagger: 0.2,
});
tl.from("#homepara", {
  // delay: 1.2,
  x: -500,
  scale: 0,
  opacity: 0,
  duration: 0.3,
  stagger: 0.2,
});
tl.from("#arrow", {
  // delay: 1.2,
  x: 100,
  scale: 0,
  rotate:"-360",
  opacity: 0,
  duration: 0.3,
  stagger: 0.2,
});

tl.from("#fullstack", {
  y: -3,
  yoyo: true,
  repeat: "-1",
  rotate: -2,
  ease: "none",
  duration: 2,
  backgroundColor: "rgb(253, 154, 118)",
});

gsap.from("#letsconnect ", {
  y: 100,
  scale: 0,
  delay: 1.7,
  opacity: 0,
  duration: 0.4,
  stagger: 0.2,
});
gsap.from(".links i", {
  y: 100,
  scale: 0,
  delay: 2,
  opacity: 0,
  duration: 0.4,
  stagger: 0.2,
});

gsap.from(".home__image", {
  x: 1000,
  rotate: 360,
  scale: 3,
  delay: 2,
  opacity: 0,
  duration: 0.7,
  stagger: 0.2,
});

// about
gsap.from(".about__image", {
  x: -100,
  rotate: 120,
  scale: 3,
  opacity: 0,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".about__data",
    scroller: "body",
    start: "top 50%",
    end: "top -10%",
    scrub: 3,
  },
});
gsap.from(".about__data", {
  x: 100,
  scale: 2,
  opacity: 0,
  duration: 0.7,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".about__data",
    scroller: "body",
    start: "top 50%",
    end: "top -10%",
    scrub: 2,
  },
});

gsap.to("#skillh1", {
  opacity: 0,
  transform: " translateX(-50%)",
  scrollTrigger: {
    trigger: ".skills__heading",
    scroller: "body",
    start: "22%",
    end: "180%",
    scrub: 2,
    pin: true,
  },
});

gsap.to("#skill-box img", {
  transform: "translateX(-1300%)",
  ease: "none",
  repeat: -1,
  duration: 5,
});

gsap.from("#frontt ", {
  x: 1000,
  rotate: 10,
  scrollTrigger: {
    trigger: ".services__container ",
    scroller: "body",
    // markers: true,
    start: "top 70%",
    // end: "top 30%",
    scrub: 3,
  },
});
gsap.from("#backk ", {
  y: 100,
  rotate: 20,
  scrollTrigger: {
    trigger: ".services__container ",
    scroller: "body",
    // markers: true,
    start: "top 70%",
    // end: "top 30%",
    scrub: 3,
  },
});
gsap.from("#designn ", {
  x: -1000,
  rotate: -20,

  scrollTrigger: {
    trigger: ".services__container ",
    scroller: "body",
    // markers: true,
    start: "top 70%",
    // end: "top 30%",
    scrub: 3,
  },
});

// what i do
gsap.from("#section-title ", {
  color: "white",
  y: 5,
  scale: 15,
  opacity: 0,
  scrollTrigger: {
    trigger: "#services ",
    scroller: "body",
    // markers: true,
    start: "top 20%",
    // end: "top 0%",
    scrub: 1,
    pin: true,
  },
});

gsap.to("#recent-projects", {
  // ease: "bounce.out",
  scale: "50",
  color: "hsl(250, 100%, 75%)",
  transform: "translateX(-210%)",
  opacity: 0,
  scrollTrigger: {
    trigger: "#projects",
    scroller: "body",
    scrub: 1,
    // pin:true,
    // markers:true,
    start: " 20%",
    // end:" 80%"
  },
});

// projects
var projecttl = gsap.timeline();

// projecttl.from(".projects__container article", {
//   opacity:0,
//   scale:"20",
//   stagger:0.2,
//   scrollTrigger: {
//     trigger: ".projects__container",
//     scroller:"body",
//     scrub:2,
//     start:"top 20%",
//     end:"400%",
//     // markers:true,
//     pin:true
//   },
// });

projecttl.from("#pro1", {
  scale: "20",
  opacity: 0,
  scrollTrigger: {
    trigger: ".projects__container",
    scroller: "body",
    scrub: 1,
    start: "top 20%",
    end: "200%",
    // markers:true,
    pin: true,
  },
});
projecttl.from("#pro1", {
  opacity: 0,
  x: "300",
  scrollTrigger: {
    trigger: ".projects__container",
    scroller: "body",
    scrub: true,
    start: "top 20%",
    end: "200%",
    // markers:true,
    // pin: true,
  },
});
projecttl.from("#pro3", {
  opacity: 0,
  x: "-300",
  scrollTrigger: {
    trigger: ".projects__container",
    scroller: "body",
    scrub: true,
    start: "top 20%",
    end: "200%",
    // markers:true,
    // pin: true,
  },
});
projecttl.from("#pro5", {
  opacity: 0,
  y: "-200",
  scrollTrigger: {
    trigger: ".projects__container",
    scroller: "body",
    scrub: true,
    start: "top 20%",
    end: "300%",
    // markers:true,
    // pin: true,
  },
});
projecttl.from("#pro4", {
  opacity: 0,
  // y: "-200",
  scrollTrigger: {
    trigger: ".projects__container",
    scroller: "body",
    scrub: true,
    start: "top 20%",
    end: "300%",
    // markers:true,
    // pin: true,
  },
});
projecttl.from("#pro6", {
  opacity: 0,
  // y: "-200",
  scrollTrigger: {
    trigger: ".projects__container",
    scroller: "body",
    scrub: true,
    start: "top 20%",
    end: "300%",
    // markers:true,
    // pin: true,
  },
});
projecttl.from("#pro7", {
  opacity: 0,
  // y: "-200",
  scrollTrigger: {
    trigger: ".projects__container",
    scroller: "body",
    scrub: true,
    start: "top 20%",
    end: "300%",
    // markers:true,
    // pin: true,
  },
});

gsap.from("#getintouch", {
  // scale: "50",
  y: "-14vw",
  opacity: 0,
  scrollTrigger: {
    ease: "bounce.out",
    trigger: "#contact",
    scroller: "body",
    scrub: 1,
    start: " 45%",
    end: " 0%",
    // pin:true,
  },
});
gsap.from("#contactme", {
  // scale: "50",
  y: "10vw",
  opacity: 0,
  scrollTrigger: {
    ease: "bounce.out",
    trigger: "#contact",
    // markers:true,
    scroller: "body",
    scrub: 1,
    start: " 40%",
    end: " 0%",
    // pin:true,
  },
});

var contacttl = gsap.timeline();
contacttl.from("#contact-form input", {
  x: "80",
  rotate: "8",
  opacity: 0,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".contact__container",
    scroller: "body",
    scrub: 1,
    // markers: true,
    start: "top 70%",
    end: "top 30%",
    // pin: true,
  },
});
contacttl.from("#contact-form textarea", {
  x: "-80",
  rotate: "-8",
  opacity: 0,
  scrollTrigger: {
    trigger: ".contact__container",
    scroller: "body",
    scrub: 1,
    // markers: true,
    start: "top 45%",
    end: "top 20%",
    // pin: true,
  },
});
contacttl.from("#contact-form button", {
  y: "-80",
  scale: "2",
  rotate: "8",
  opacity: 0,
  scrollTrigger: {
    trigger: ".contact__container",
    scroller: "body",
    scrub: 1,
    // markers: true,
    start: "top 40%",
    end: "top 10%",
    // pin: true,
  },
});
var footertl = gsap.timeline();
footertl.from(".footer__elem ", {
  // repeat:-1,
  y: "-50",
  // rotate: "-30",
  scale: "1.5",
  opacity: 0,
  scrollTrigger: {
    trigger: ".footer",
    scroller: "body",
    scrub: 1,
    // markers: true,
    // pin: true,
    start: "top 90%",
    end: "top 67%",
  },
});
footertl.from(".footer__copy ", {
  // repeat:-1,
  x: "100",
  // rotate: "-30",
  scale: "1.5",
  opacity: 0,
  scrollTrigger: {
    trigger: ".footer",
    scroller: "body",
    scrub: 1,
    // markers: true,
    // pin: true,
    start: "top 90%",
    end: "top 67%",
  },
});

/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader = () => {
  const header = document.getElementById("header");
  // When the scroll is greater than 50 viewport height, add the blur-header class to the header tag
  this.scrollY >= 50
    ? header.classList.add("blur-header")
    : header.classList.remove("blur-header");
};
window.addEventListener("scroll", blurHeader);

/*=============== EMAIL JS ===============*/
function handleSend() {
  emailjs.init("QHWtNpPK8_Sw4gsga");
  console.log("daba to ahahi");
}

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    emailjs.sendForm("service_outnypw", "template_j9mwyy3", this).then(
      function (response) {
        console.log("Email sent!", response.status, response.text);
        alert("Email sent successfully to anserahmed.777@gmail.com !");
      },
      function (error) {
        console.error("Error sending email:", error);
        alert("Oops! Something went wrong!");
      }
    );
  });

contactForm.addEventListener("submit", sendEmail);

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav__menu a[href*=" + sectionId + "]"
      );

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  reset: true,
});
sr.reveal(
  `.home__data, .home__social, .contact__container, .footer__container`
);
sr.reveal(`.home__image`, { origin: "bottom" });
sr.reveal(`.about__data, .skills__data`, { origin: "left" });
sr.reveal(`.about__image,  .skills__content`, { origin: "right" });
sr.reveal(`.services__card, .projects__card`, { interval: 100 });
