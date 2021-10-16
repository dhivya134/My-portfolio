// show menu
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId);
  nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show-menu");
    });
  }
};
showMenu("nav-toggle", "nav-menu");

// remove menu mobile

const navLink = document.querySelectorAll(".nav-link");
function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

// scroll section action active link
const section = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  section.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

// changr background header
function scrollHeader() {
  const header = document.getElementById("header");
  if (this.scrollY >= 200) header.classList.add("scroll-header");
  else header.classList.remove("scroll-headder");
}
window.addEventListener("scroll", scrollHeader);

// show scroll top
function scrollTop() {
  const scrollTop = document.getElementById("scroll-top");
  if (this.scrollY >= 560) scrollTop.classList.add("show-scroll");
  else scrollTop.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollTop);

// mixitup filter protfolio
const mixer = mixitup(".protfolio-container", {
  selectors: {
    target: ".protfolio-content",
  },
  animation: {
    duration: 400,
  },
});

// link active protfolio
const linkProtfolio = document.querySelectorAll(".protfolio-item");

function activeProtfolio() {
  if (linkProtfolio) {
    linkProtfolio.forEach((l) => l.classList.remove("active-protfolio"));
    this.classList.add("active-protfolio");
  }
}
linkProtfolio.forEach((l) => l.addEventListener("click", activeProtfolio));

// swiper ccarousel

const mySwiper = new Swiper(".testimonial-container", {
  spaceBetween: 16,
  loop: true,
  grabCursor: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoionts: {
    640: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 2,
    },
  },
});

//   gsap animation

gsap.from(".home-img", { opacity: 0, duration: 2, delay: 0.5, x: 60 });
gsap.from(".home-data", { opacity: 0, duration: 2, delay: 0.8, y: 25 });
gsap.from(".home-gretting, .home-name, .home-proffesion, .home-button", {
  opacity: 0,
  duration: 2,
  delay: 1,
  y: 25,
  ease: "expo.out, stagger:.2",
});
gsap.from(".nav-logo, .nav-toggle", {
  opacity: 0,
  duration: 2,
  delay: 1.5,
  y: 25,
  ease: "expo.out, stagger:.2",
});
gsap.from(".nav-item", {
  opacity: 0,
  duration: 2,
  delay: 1.8,
  y: 25,
  ease: "expo.out, stagger:.2",
});
gsap.from(".home-social-icon", {
  opacity: 0,
  duration: 2,
  delay: 2.3,
  y: 25,
  ease: "expo.out, stagger:.2",
});
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

