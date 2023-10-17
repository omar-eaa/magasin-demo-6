let slideIndex = 0;
showSlides(slideIndex);

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slides");
  let radioButtons = document.getElementById("radioButtons");
  if (n >= slides.length) {
    slideIndex = 0;
  }
  if (n < 0) {
    slideIndex = slides.length - 1;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";

  let radioButtonsHtml = "";
  for (i = 0; i < slides.length; i++) {
    radioButtonsHtml += `<input type="radio" name="radioBtn" onclick="currentSlide(${i})" ${
      i === slideIndex ? "checked" : ""
    }>`;
  }
  radioButtons.innerHTML = radioButtonsHtml;
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}
