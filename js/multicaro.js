var slideIndex = [1,7];
var slideId = ["mySlides1", "mySlides2", "mySlides3", "mySlides4", "mySlides5", "mySlides6", "mySlides7", "mySlides8"]
showSlides(0, 0);
showSlides(0, 1);
showSlides(0, 2);
showSlides(0, 3);
showSlides(0, 4);
showSlides(0, 5);
showSlides(0, 6);
showSlides(0, 7);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  console.log(x);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 2) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
}