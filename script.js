/* ===============================
   Typing Animation
================================= */

const text = "AI & Machine Learning Engineer";

const typingElement = document.querySelector(".hero h2");

let i = 0;

typingElement.innerHTML = "";

function typing() {

    if (i < text.length) {

        typingElement.innerHTML += text.charAt(i);

        i++;

        setTimeout(typing, 80);

    }

}

typing();


/* ===============================
   Fade In Animation
================================= */

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.2

});

document.querySelectorAll("section").forEach((section) => {

    section.classList.add("hidden");

    observer.observe(section);

});


/* ===============================
   Active Navbar
================================= */

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


/* ===============================
   Scroll to Top Button
================================= */

const topButton = document.createElement("button");

topButton.innerHTML = "⬆";

topButton.id = "topBtn";

document.body.appendChild(topButton);

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

});

topButton.onclick = () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};


/* ===============================
   Profile Image Floating Effect
================================= */

const image = document.querySelector(".hero-image img");

let direction = 1;

setInterval(() => {

    image.style.transform = `translateY(${direction * 10}px)`;

    direction *= -1;

}, 2000);