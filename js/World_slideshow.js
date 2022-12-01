let slideIndex = [1,1,1,1,1,1,1,1,1,1];
let slideId = ["slidesW 1", "slidesW 2", "slidesW 3", "slidesW 4", "slidesW 5", "slidesW 6", "slidesW 7", "slidesW 8", "slidesW 9", "slidesW 10"]
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