window.location.href="#slide-1";

/* Class Button */
var slideIndex = 1;
classButton(slideIndex);

function classSlide(n) {
  classButton(slideIndex = n);
}

function classButton(n) {
    var i;
    var btn = document.getElementsByClassName("button");
    for (i = 0; i < btn.length; i++) {
        btn[i].className = btn[i].className.replace(" active", "");
    }
    btn[slideIndex - 1].className += " active";
}