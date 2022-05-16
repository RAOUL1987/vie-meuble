const services = document.querySelector(".services");
const ambuger = document.querySelector(".ambuger");

ambuger.addEventListener("click", () => {
  services.classList.toggle("show");
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 590) {
    services.classList.remove("show");
  }
});

const sr = ScrollReveal({
  distance: "50px",
  duration: 1500,
  easing: "cubic-bezier(0.68, -0.55, 0.265, 1.55)"
});

sr.reveal(".scrolbi", { origin: "top" });