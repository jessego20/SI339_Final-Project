let slideIndex = [1,1,1,1,1,1,1,1,1,1];
let slideId = ["slides 1", "slides 2", "slides 3", "slides 4", "slides 5", "slides 6", "slides 7", "slides 8", "slides 9", "slides 10"]
let dotId = ["dot 1", "dot 2", "dot 3", "dot 4", "dot 5", "dot 6", "dot 7", "dot 8", "dot 9", "dot 10"]
for (let i = 0; i < 10; i++) {
    showSlides(1, i)
}

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function currentSlide(n, no) {
    showSlides(slideIndex[no] = n, no);
  }

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  let dots = document.getElementsByClassName(dotId[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  dots[slideIndex[no]-1].className += " active"
}