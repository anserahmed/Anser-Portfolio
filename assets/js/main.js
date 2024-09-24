// GSAP START
gsap.from("#anser", {
  y: -50,
  delay: 0.3,
  scale: 0.5,
  opacity: 0,
  duration: 0.5,
});

gsap.from("#nav-list li", {
  y: -50,
  // scale: 0.5,
  opacity: 0,
  duration: 0.4,
  stagger: 0.2,
});

var tl = gsap.timeline();

tl.from("#home-data h1,h3,p", {
  x: -500,
  scale: 0,
  opacity: 0,
  duration: 0.3,
  stagger: 0.2,
});
gsap.from("#letsconnect ", {
  y: 100,
  scale: 0,
  delay: 1,
  opacity: 0,
  duration: 0.4,
  stagger: 0.2,
});
gsap.from(".links i", {
  y: 100,
  scale: 0,
  delay: 1.1,
  opacity: 0,
  duration: 0.4,
  stagger: 0.2,
});

gsap.from(".home__image", {
  x: 1000,
  rotate: 360,
  scale: 2,
  delay: 0.8,
  opacity: 0,
  duration: 0.7,
  stagger: 0.2,
});

gsap.from(".about__image", {
  x: -1000,
  rotate: 320,
  scale: 2,
  opacity: 0,
  duration: 0.7,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".about__image",
    // markers:true,
    scroller:"body",
    start:"top 20%",
    end:"top -5%",
    scrub:3,
 
  },
});
gsap.from(".about__data", {
  x: 100,
  // rotate: 360,
  scale: 2,
  opacity: 0,
  duration: 0.7,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".about__data",
    // markers:true,
    scroller:"body",
    start:"top 30%",
    end:"top -5%",
    scrub:2
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
