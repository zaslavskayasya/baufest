let gallerySlide = $('.gallery-type2')

gallerySlide.slick({
  dots: false,
  arrows: true,
  slidesToShow: 1,
  asNavFor: '.gallery-type-nav',
  focusOnSelect: true,
  infinite: false,
  // adaptiveHeight: true,

});

let sliderNavGallery = $('.gallery-type-nav');
let countSlideGallery = sliderNavGallery.find('.slide').length;

sliderNavGallery.slick({
  asNavFor: '.gallery-type2',
  dots: false,
  arrows: false,
  centerMode: false,
  focusOnSelect: true,
  variableWidth: false,
  slidesToShow: countSlideGallery > 8 ? 10 : 7,
  infinite: countSlideGallery > 8,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 5,
      }
    }
  ]
  
});

//# sourceMappingURL=gallery_one.js.map
