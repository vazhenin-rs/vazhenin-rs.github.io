$(document).ready(function () {
   $('.slider').slick({
      arrows: false,
      swipe: false,
      dots: true,
      dotsClass: 'slider-dots-custom',
      autoplay: true,
      autoplaySpeed: 5000
   });
});

var writeButton      = document.querySelector(".button-write-us"),
    writePopup       = document.querySelector(".modal-write"),
    writeCloseButton = document.querySelector(".modal__close");

writeButton.addEventListener("click", function(evt){
   evt.preventDefault();
   writePopup.classList.add("modal__show");
});

writeCloseButton.addEventListener("click", function(evt){
   evt.preventDefault();
   writePopup.classList.remove("modal__show");
});