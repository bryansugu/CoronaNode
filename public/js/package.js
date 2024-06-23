document.addEventListener("DOMContentLoaded", function() {
  new Splide(".home", {
    type: "loop",
    drag: "free",
    focus: "center",
    arrows: false,
    pagination: false,
    autoWidth: true,
    gap: 20,
    perPage: 3,
    autoScroll: {
      speed: 1,
      pauseOnHover: false,
    },
  }).mount(window.splide.Extensions);
  new Splide(".proyectos", {
    type: "loop",
    autoplay: true,
    focus: 0,
    arrows: false,
    pagination: false,
    autoWidth: true,
    gap: 20,
    perPage: 3,
    interval: 4000,
  }).mount();
});
