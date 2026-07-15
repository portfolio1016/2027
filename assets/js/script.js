/* ==========================================================
   KOSEI Portfolio v2
   script.js
========================================================== */

"use strict";

/* ==========================================================
   GSAP
========================================================== */

gsap.registerPlugin(ScrollTrigger);


/* ==========================================================
   Loader
========================================================== */

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    gsap.timeline()

        .to(".loader__text", {

            opacity: 0,
            y: -20,
            duration: .5

        })

        .to(".loader__line", {

            width: 220,
            duration: .5

        })

        .to(loader, {

            opacity: 0,
            duration: .8,

            onComplete: () => {

                loader.classList.add("is-hidden");

            }

        });

});


/* ==========================================================
   Header Scroll
========================================================== */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {

        header.classList.add("is-active");

    } else {

        header.classList.remove("is-active");

    }

});


/* ==========================================================
   Hamburger Menu
========================================================== */

const hamburger = document.querySelector(".header__hamburger");

const navigation = document.querySelector(".header__nav");

if (hamburger) {

    hamburger.addEventListener("click", () => {

        hamburger.classList.toggle("is-active");

        navigation.classList.toggle("is-active");

    });

}


/* ==========================================================
   Smooth Scroll
========================================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (!target) return;

        target.scrollIntoView({

            behavior: "smooth"

        });

    });

});


/* ==========================================================
   Custom Cursor
========================================================== */

const cursor = document.querySelector(".cursor");

const cursorDot = document.querySelector(".cursor-dot");

document.addEventListener("mousemove", e => {

    gsap.to(cursor, {

        x: e.clientX,

        y: e.clientY,

        duration: .2

    });

    gsap.to(cursorDot, {

        x: e.clientX,

        y: e.clientY,

        duration: .05

    });

});


document.querySelectorAll("a, button").forEach(item => {

    item.addEventListener("mouseenter", () => {

        cursor.classList.add("is-hover");

    });

    item.addEventListener("mouseleave", () => {

        cursor.classList.remove("is-hover");

    });

});


/* ==========================================================
   Hero Animation
========================================================== */

const heroTimeline = gsap.timeline({

    delay: .3

});

heroTimeline

.from(".hero__label", {

    y: 40,

    opacity: 0,

    duration: .7

})

.from(".hero__title", {

    y: 80,

    opacity: 0,

    duration: .8

}, "-=.4")

.from(".hero__copy", {

    y: 40,

    opacity: 0,

    duration: .7

}, "-=.5")

.from(".hero__description", {

    y: 40,

    opacity: 0,

    duration: .7

}, "-=.5")

.from(".hero__button", {

    scale: .9,

    opacity: 0,

    duration: .6

}, "-=.4")


/* ==========================================================
   ScrollTrigger
========================================================== */

ScrollTrigger.defaults({

    toggleActions: "play none none reverse"

});


/* ==========================================================
   Reveal Animation
========================================================== */

gsap.utils.toArray(".section").forEach(section => {

    gsap.from(section, {

        opacity: 0,

        y: 80,

        duration: 1,

        ease: "power3.out",

        scrollTrigger: {

            trigger: section,

            start: "top 80%"

        }

    });

});


/* ==========================================================
   About
========================================================== */

gsap.from(".about__left > *", {

    y: 50,

    opacity: 0,

    duration: .8,

    stagger: .2,

    scrollTrigger: {

        trigger: ".about",

        start: "top 70%"

    }

});

gsap.from(".profile-card", {

    x: 80,

    opacity: 0,

    duration: 1,

    scrollTrigger: {

        trigger: ".about",

        start: "top 70%"

    }

});


/* ==========================================================
   Achievement Cards
========================================================== */

gsap.utils.toArray(".achievement-card").forEach(card => {

    gsap.from(card, {

        y: 100,

        opacity: 0,

        duration: 1,

        ease: "power3.out",

        scrollTrigger: {

            trigger: card,

            start: "top 75%"

        }

    });

});

/* ==========================================================
   Glow Animation
========================================================== */

gsap.to(".background-glow", {

    x: 150,

    y: -120,

    repeat: -1,

    yoyo: true,

    duration: 8,

    ease: "sine.inOut"

});


/* ==========================================================
   Active Navigation
========================================================== */

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".header__menu a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 180;

        const height = section.offsetHeight;

        if (scrollY >= top && scrollY < top + height) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("is-current");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("is-current");

        }

    });

});
/* ==========================================================
   Scroll Progress
========================================================== */

const progressBar = document.createElement("div");

progressBar.className = "scroll-progress";

document.body.appendChild(progressBar);

window.addEventListener("scroll", () => {

    const scrollTop = window.scrollY;

    const documentHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

    const progress = (scrollTop / documentHeight) * 100;

    progressBar.style.width = progress + "%";

});


/* ==========================================================
   Back To Top
========================================================== */

const backToTop = document.createElement("button");

backToTop.className = "back-to-top";

backToTop.innerHTML = "↑";

backToTop.setAttribute("aria-label", "ページトップへ戻る");

document.body.appendChild(backToTop);

window.addEventListener("scroll", () => {

    if (window.scrollY > 600) {

        backToTop.classList.add("is-show");

    } else {

        backToTop.classList.remove("is-show");

    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/* ==========================================================
   Intersection Observer
========================================================== */

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("is-visible");

        }

    });

}, {

    threshold: .15

});

document.querySelectorAll(".reveal").forEach(element => {

    observer.observe(element);

});


/* ==========================================================
   Resize Refresh
========================================================== */

window.addEventListener("resize", () => {

    ScrollTrigger.refresh();

});


/* ==========================================================
   Reduced Motion
========================================================== */

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

if (reduceMotion.matches) {

    gsap.globalTimeline.clear();

    ScrollTrigger.getAll().forEach(trigger => trigger.kill());

}


/* ==========================================================
   Console Message
========================================================== */

console.log(

`%c
KOSEI Portfolio v2
デザイン the Experience.
Created by KOSEI SHIMIZU
`,

"color:#38bdf8;font-size:16px;font-weight:bold;"

);


/* ==========================================================
   Init
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    ScrollTrigger.refresh();

});