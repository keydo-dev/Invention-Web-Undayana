import { animate, inView } from "motion";

export function initAnimations() {
  const nav = document.getElementById("main-nav");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      nav.classList.remove("h-20", "bg-black/10");
      nav.classList.add("h-16", "bg-neutral-950/80", "shadow-lg");
    } else {
      nav.classList.remove("h-16", "bg-neutral-950/80", "shadow-lg");
      nav.classList.add("h-20", "bg-black/10");
    }
  });

  const heroElements = document.querySelectorAll("[data-animate='hero-child']");
  heroElements.forEach((el, index) => {
    animate(
      el,
      { opacity: [0, 1], y: [30, 0] },
      { duration: 0.8, delay: index * 0.25, easing: "ease-out" },
    );
  });

  inView("[data-animate='fade-right']", ({ target }) => {
    animate(target, { opacity: [0, 1], x: [-50, 0] }, { duration: 0.8 });
  });

  inView("[data-animate='fade-left']", ({ target }) => {
    animate(target, { opacity: [0, 1], x: [50, 0] }, { duration: 0.8 });
  });

  inView("[data-animate='scroll-fade']", ({ target }) => {
    animate(
      target,
      { opacity: [0, 1], y: [60, 0] },
      { duration: 0.8, easing: "ease-out" },
    );
  });
}
