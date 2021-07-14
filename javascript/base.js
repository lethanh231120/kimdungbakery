document.addEventListener("DOMContentLoaded", function () {
  var button = document.querySelectorAll(".banner_button-list-item");
  var slides = document.querySelectorAll(".banner_list-item");
  var time = setInterval(function () {
    autoslide();
  }, 4000);
  for (var i = 0; i < button.length; i++) {
    button[i].addEventListener("click", function () {
      clearInterval(time);
      for (var i = 0; i < button.length; i++) {
        button[i].classList.remove("running");
      }
      this.classList.add("running");
      var vitrinut = 0;
      var nutkichhoat = this;
      for (
        var vitrinut = 0;
        (nutkichhoat = nutkichhoat.previousElementSibling);
        vitrinut++
      ) {}
      for (var k = 0; k < slides.length; k++) {
        slides[k].classList.remove("active");
        slides[vitrinut].classList.add("active");
      }
    });
  }
  function autoslide() {
    var vitrislide = 0;
    var slidehientai = document.querySelector(".banner_list-item.active");
    for (
      vitrislide = 0;
      (slidehientai = slidehientai.previousElementSibling);
      vitrislide++
    ) {}
    if (vitrislide < slides.length - 1) {
      for (var k = 0; k < slides.length; k++) {
        slides[k].classList.remove("active");
        button[k].classList.remove("running");
      }
      slides[vitrislide].nextElementSibling.classList.add("active");
      button[vitrislide].nextElementSibling.classList.add("running");
    } else {
      for (var i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
        button[i].classList.remove("running");
      }
      slides[0].classList.add("active");
      button[0].classList.add("running");
    }
  }
  var btnleft = document.querySelector(".Exclusive_slides-arrow-icon-left");
  var btnright = document.querySelector(".Exclusive_slides-arrow-icon-right");
  var exclusiveSlide = document.querySelectorAll(".Exclusive_slides-list-item");
  var l = 0;
  btnleft.addEventListener("click", function () {
    l--;
    for (var i of exclusiveSlide) {
      if (l == 0) {
        i.style.left = "0px";
      }
      if (l == 1) {
        i.style.left = "-48rem";
      }
      if (l == 2) {
        i.style.left = "-96rem";
      }
      if (l == 3) {
        i.style.left = "-144rem";
      }
      if (l == 4) {
        i.style.left = "-192rem";
      }
      if (l == 5) {
        i.style.left = "-240rem";
      }
      if (l < 0) {
        l = 0;
      }
    }
  });
  btnright.addEventListener("click", function () {
    l++;
    for (var i of exclusiveSlide) {
      if (l == 0) {
        i.style.left = "0px";
      }
      if (l == 1) {
        i.style.left = "-48rem";
      }
      if (l == 2) {
        i.style.left = "-96rem";
      }
      if (l == 3) {
        i.style.left = "-144rem";
      }
      if (l == 4) {
        i.style.left = "-192rem";
      }
      if (l == 5) {
        i.style.left = "-240rem";
      }
      if (l > 4) {
        l = 4;
      }
    }
  });
});
