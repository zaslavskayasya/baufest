// $('.gallery-type2').slick({
//     dots: false,
//     // centerMode: true,
//     focusOnSelect: true,
//     arrows: true,
//     slidesToScroll: 1,
//     slidesToShow: 1,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     fade: true,
//     asNavFor: '.gallery-type-nav ',
//     // customPaging: function(slider, i) {
//         //     return '<div class="thumbnails2">' +$(slider.$slides[i]).find('img').prop('outerHTML')+ '</div>';
//     // }
// });

// $('.gallery-type-nav ').slick({
//     // slidesToShow: 3,
//     slidesToScroll: 1,
//     asNavFor: '.gallery-type2',
//     dots: false,
//     arrows: false,    
//     // centerMode: true,
//     focusOnSelect: true,
//     variableWidth: true
//   });



$('.gallery-type2').slick({
    dots: false,
    // centerMode: true,
    focusOnSelect: true,
    arrows: true,

    asNavFor: '.gallery-type-nav ',
    infinite: true
});

$('.gallery-type-nav ').slick({

  asNavFor: '.gallery-type2',
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
  let infinityCheck = slideCount > 5 ? true : false;
  
  $slider.slick('unslick'); // Destroy the existing slider
  
  $slider.slick({

      asNavFor: '.gallery-type2',
      dots: false,
      arrows: false,    
      centerMode: centerMode,
      focusOnSelect: true,
      variableWidth: true,
      infinite: infinityCheck,
     
  });
}

updateSliderConfig(); // Initialize the slider initially


// Update the slider configuration whenever the window is resized
$(window).on('resize', function() {
  updateSliderConfig();
  updateSliderConfig2();
});

  
//# sourceMappingURL=gallery_one.js.map