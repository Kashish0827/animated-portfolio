// Reveal on scroll
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const revealPoint = 150;

    if (elementTop < windowHeight - revealPoint) {
      reveals[i].classList.add("active");
    }
  }
}

window.addEventListener("scroll", revealOnScroll);

// Smooth slider scroll for testimonials
let startX;
const slider = document.querySelector(".testimonial-slider");

if (slider) {
  slider.addEventListener("mousedown", (e) => {
    slider.isDown = true;
    startX = e.pageX - slider.offsetLeft;
    slider.scrollLeftStart = slider.scrollLeft;
  });

  slider.addEventListener("mouseleave", () => {
    slider.isDown = false;
  });

  slider.addEventListener("mouseup", () => {
    slider.isDown = false;
  });

  slider.addEventListener("mousemove", (e) => {
    if (!slider.isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 1.5;
    slider.scrollLeft = slider.scrollLeftStart - walk;
  });
}
