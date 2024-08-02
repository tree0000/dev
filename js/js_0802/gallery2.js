document.addEventListener("DOMContentLoaded", () => {
  let slides = document.querySelectorAll("#container > img");
  let prev = document.querySelector("#prev");
  let next = document.querySelector("#next");
  let current = 0;

  prev.onclick = preSlide;
  next.onclick = nextSlide;

  showSlide(current);

  function showSlide(n) {
    slides.forEach((slide, index) => {
      slide.classList.remove("active");
      if (index === n) {
        slide.classList.add("active");
      }
    });
  }

  function preSlide() {
    if (current > 0) {
      current -= 1;
    } else {
      current = slides.length - 1;
    }
    showSlide(current);
  }

  function nextSlide() {
    if (current < slides.length - 1) {
      current += 1;
    } else {
      current = 0;
    }
    showSlide(current);
  }
});
