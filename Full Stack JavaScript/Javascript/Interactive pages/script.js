let slideNumber = 0;
const slides = document.querySelectorAll(".my-slide");
const dots = document.querySelectorAll(".buttons");
let numImages = slides.length;

function displaySlide(slideNumber) {
  let i = 0;

  for(i=0;i<slides.length;i++) {
    slides[i].style.display = "none";
  }
  for(i=0;i<dots.length;i++) {
    dots[i].className = dots[i].className.split(' ').at(0);
  }

  slides[slideNumber].style.display = "block";
  dots[slideNumber].className += " active";
}

function changeSlide(num) {
  slideNumber = (slideNumber+num) % numImages;
  displaySlide(slideNumber);
}

function gotoSlide(id) {
  displaySlide(id-1);
}
displaySlide(slideNumber);