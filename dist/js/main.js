console.log('mainPage js')

$(document).ready(function(){
var $slider = $('.main-slider');

if ($slider.length) {
  var currentSlide;
  var slidesCount;
  var sliderCounter = document.createElement('div');
  sliderCounter.classList.add('slider__counter');

  let leftCounter = document.createElement('div');
  leftCounter.classList.add('left-counter');
    leftCounter.classList.add('slider-number');

  let rightCounter = document.createElement('div');
  rightCounter.classList.add('right-counter');
    rightCounter.classList.add('slider-number');

  
  var updateSliderCounter = function(slick, currentIndex) {
    currentSlide = slick.slickCurrentSlide() + 1;
    slidesCount = slick.slideCount;

    if(currentSlide<=9 && slidesCount <= 9){
        $(leftCounter).text("0" + currentSlide);
        $(rightCounter).text("0" + slidesCount);
    } else if (currentSlide > 9 && slidesCount <= 9){
        $(leftCounter).text("" + currentSlide);
        $(rightCounter).text("0" + slidesCount);
    } else if (currentSlide <=9  && slidesCount > 9){
        $(leftCounter).text("0" + currentSlide);
        $(rightCounter).text("" + slidesCount);
    }else if (currentSlide > 9  && slidesCount > 9){
        $(leftCounter).text("" + currentSlide);
        $(rightCounter).text("" + slidesCount);
    }



    // $(sliderCounter).text(currentSlide + '/' +slidesCount);

  };

  $slider.on('init', function(event, slick) {
    $slider.append(sliderCounter);
    sliderCounter.append(leftCounter);
    sliderCounter.append(rightCounter);
    updateSliderCounter(slick);
  });

  $slider.on('afterChange', function(event, slick, currentSlide) {
    updateSliderCounter(slick, currentSlide);
  });

  $slider.slick({
      adaptiveHeight: true,
      arrows: true,
  });
}
});

const marquee = document.querySelector('.marquee');
marquee.addEventListener('animationiteration', () => {
  marquee.style.animation = 'none';
  void marquee.offsetWidth;
  marquee.style.animation = 'marquee 20s linear infinite'; // Задайте тут ту саму тривалість, яку використовували в CSS
});


// function Marquee(selector, speed) {
//   const parentSelector = document.querySelector(selector);
//   const clone = parentSelector.innerHTML;
//   const firstElement = parentSelector.children[0];
//   let i = 0;
//   console.log(firstElement);
//   // parentSelector.insertAdjacentHTML('beforeend', clone);

//   setInterval(function () {
//     firstElement.style.marginLeft = `-${i}px`;
//     if (i > firstElement.clientWidth) {
//       i = 0;
//     }
//     i = i + speed;
//   }, 0);
// }

// //after window is completed load
// //1 class selector for marquee
// //2 marquee speed 0.2
// window.addEventListener('load', Marquee('.marquee', 0.6))


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

var input = document.querySelector("#phone");
  window.intlTelInput(input, {
    showFlags: true,
    separateDialCode: true,
    allowDropdown: true,
    preferredCountries: ["ua","pl", "md" ],
    utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/utils.js",
  });

//# sourceMappingURL=main.js.map
