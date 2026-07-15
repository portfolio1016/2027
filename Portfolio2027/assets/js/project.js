/* ==========================================
   Fade In Animation
========================================== */

const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if(entry.isIntersecting){

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },

    {

        threshold:0.15

    }

);

document

.querySelectorAll(

    ".section,\
    .overview-card,\
    .challenge-card,\
    .goal-card,\
    .role-card,\
    .feature-card,\
    .timeline__item,\
    .tech-card,\
    .result-card,\
    .learning-card,\
    .gallery-card,\
    .mockup-card,\
    .concept-point,\
    .concept-box,\
    .design-system__card,\
    .final-card,\
    .final-design__image"

)

.forEach(

    el => observer.observe(el)

);

document.querySelectorAll(
    ".section, .overview-card, .challenge-card, .goal-card, .role-card, .feature-card, .timeline__item, .tech-card, .result-card, .learning-card, .gallery-card, .mockup-card, .concept-point, .concept-box, .design-system__card, .final-card, .final-design__image"
).forEach(el => observer.observe(el));



/* ==========================================
   Header Blur
========================================== */

window.addEventListener(

    "scroll",

    ()=>{

        const header=document.querySelector(".header");

        if(!header)return;

        if(window.scrollY>40){

            header.classList.add("header--scroll");

        }else{

            header.classList.remove("header--scroll");

        }

    }

);



/* ==========================================
   Smooth Scroll
========================================== */

document

.querySelectorAll('a[href^="#"]')

.forEach(anchor=>{

    anchor.addEventListener(

        "click",

        function(e){

            e.preventDefault();

            const target=document.querySelector(

                this.getAttribute("href")

            );

            if(target){

                target.scrollIntoView({

                    behavior:"smooth"

                });

            }

        }

    );

});