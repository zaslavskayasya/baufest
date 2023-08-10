
$('.catalog-slider').slick({
    dots: false,
    // centerMode: true,
    focusOnSelect: true,
    arrows: true,

    asNavFor: '.gallery-type-nav ',
    infinite: false
});

$('.gallery-type-nav ').slick({

  asNavFor: '.catalog-slider',
  dots: false,
  arrows: false,    
  centerMode: true,
  focusOnSelect: true,
  variableWidth: true,
  infinite: false
});


let $slider = $('.gallery-type-nav');
   
function updateSliderConfig() {
  let slideCount = $slider.find('.slide').length;
  let centerMode = slideCount > 5 ? false : true;
  
  $slider.slick('unslick'); // Destroy the existing slider
  
  $slider.slick({

      asNavFor: '.catalog-slider',
      dots: false,
      arrows: false,    
      centerMode: centerMode,
      focusOnSelect: true,
      variableWidth: true,
      infinite: false,
      beforeChange: function (event, slick, currentSlide, nextSlide) {
        if (nextSlide < currentSlide) {
          event.preventDefault(); // Prevent sliding to the left
        }
      }
  });
}

updateSliderConfig(); // Initialize the slider initially


// Update the slider configuration whenever the window is resized
$(window).on('resize', function() {
  updateSliderConfig();
  updateSliderConfig2();
});






$('.scheme-slider').slick({
  dots: false,
  // centerMode: true,
  focusOnSelect: true,
  arrows: true,
  slidesToScroll: 1,
  slidesToShow: 1,
  asNavFor: '.gallery-type-nav2 ',
  infinite: false,



});

$('.gallery-type-nav2 ').slick({
  // slidesToScroll: 1,
  asNavFor: '.scheme-slider',
  dots: false,
  arrows: false,    
  // centerMode: true,
  focusOnSelect: true,
  // variableWidth: true,
  infinite: false,
 
});

let $slider2 = $('.gallery-type-nav2');
   
function updateSliderConfig2() {
  let slideCount = $slider2.find('.slide').length;
  let centerMode = slideCount > 5 ? false : true;
  let infinityCheck = slideCount > 5 ? true : false;
  
  $slider2.slick('unslick'); // Destroy the existing slider
  
  $slider2.slick({
      // slidesToShow: 3,
      // slidesToScroll: 1,
      asNavFor: '.scheme-slider',
      dots: false,
      arrows: false,    
      centerMode: centerMode,
      focusOnSelect: true,
      variableWidth: true,
      infinite: infinityCheck,

  });
}


updateSliderConfig2();




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
//# sourceMappingURL=catalog-one.js.map