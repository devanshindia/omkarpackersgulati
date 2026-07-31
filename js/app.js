/*====================================================
    OMKAR PACKERS GULATI
    MAIN JAVASCRIPT
====================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*=====================================
        LOADER
    =====================================*/

    const loader = document.querySelector(".loader");

    window.addEventListener("load", () => {

        if(loader){

            loader.style.opacity = "0";

            loader.style.visibility = "hidden";

            loader.style.transition = ".5s";

            setTimeout(()=>{

                loader.remove();

            },500);

        }

    });

    /*=====================================
        STICKY NAVBAR
    =====================================*/

    const header = document.querySelector("header");

    window.addEventListener("scroll",()=>{

        if(window.scrollY > 50){

            header.classList.add("scrolled");

        }else{

            header.classList.remove("scrolled");

        }

    });

    /*=====================================
        MOBILE MENU
    =====================================*/

    const menuButton = document.querySelector(".mobileMenu");

    const navLinks = document.querySelector(".nav-links");

    if(menuButton){

        menuButton.addEventListener("click",()=>{

            navLinks.classList.toggle("active");

            menuButton.classList.toggle("active");

        });

    }

    document.querySelectorAll(".nav-links a").forEach(link=>{

        link.addEventListener("click",()=>{

            navLinks.classList.remove("active");

        });

    });

    /*=====================================
        SCROLL TO TOP
    =====================================*/

    const scrollTop = document.querySelector(".scrollTop");

    window.addEventListener("scroll",()=>{

        if(window.scrollY > 500){

            scrollTop.classList.add("active");

        }

        else{

            scrollTop.classList.remove("active");

        }

    });

    if(scrollTop){

        scrollTop.addEventListener("click",()=>{

            window.scrollTo({

                top:0,

                behavior:"smooth"

            });

        });

    }

    /*=====================================
        COUNTER
    =====================================*/

    const counters = document.querySelectorAll("[data-count]");

    let started = false;

    function startCounter(){

        if(started) return;

        if(window.scrollY < 500) return;

        started = true;

        counters.forEach(counter=>{

            const target = +counter.dataset.count;

            let value = 0;

            const increment = target / 120;

            function update(){

                value += increment;

                if(value < target){

                    counter.innerText = Math.floor(value);

                    requestAnimationFrame(update);

                }

                else{

                    counter.innerText = target + "+";

                }

            }

            update();

        });

    }

    window.addEventListener("scroll",startCounter);

    /*=====================================
        REVEAL ANIMATION
    =====================================*/

    const reveals = document.querySelectorAll(

        "section,.categoryCard,.whyCard,.industryCard,.experienceCard"

    );

    function revealElements(){

        reveals.forEach(element=>{

            const top = element.getBoundingClientRect().top;

            const visible = window.innerHeight - 120;

            if(top < visible){

                element.classList.add("active");

            }

        });

    }

    window.addEventListener("scroll",revealElements);

    revealElements();

    /*=====================================
        SMOOTH LINKS
    =====================================*/

    document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

        anchor.addEventListener("click",function(e){

            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if(target){

                target.scrollIntoView({

                    behavior:"smooth"

                });

            }

        });

    });

    /*=====================================
        ACTIVE NAV LINK
    =====================================*/

    const sections = document.querySelectorAll("section");

    const navItems = document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll",()=>{

        let current = "";

        sections.forEach(section=>{

            const sectionTop = section.offsetTop - 140;

            if(window.scrollY >= sectionTop){

                current = section.getAttribute("id");

            }

        });

        navItems.forEach(link=>{

            link.classList.remove("active");

            if(current && link.getAttribute("href") === "#" + current){

                link.classList.add("active");

            }

        });

    });

});

/*=========================================
    FUTURE FEATURES
=========================================*/

// Product Search

// Product Filters

// Product Gallery

// Image Lightbox

// Catalogue Download

// Dark Mode

// Wishlist

// Product Comparison