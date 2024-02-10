let slides = document.querySelectorAll(".slide");
let counter = 0;
slides.forEach((slide, index) => {
  slide.style.bottom = `${index * 100}%`;
});

function gonext() {
  counter++;
  slideShow();
}
function goprev() {
  counter--;
  slideShow();
}
function slideShow() {
  slides.forEach((slide) => {
    slide.style.transform = `translateY(${counter * 100}%)`;
  });
}
