$('.gallery-type2').slick({
    dots: false,
    // centerMode: true,
    focusOnSelect: true,
    arrows: true,
    slidesToScroll: 1,
    slidesToShow: 1,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    asNavFor: '.gallery-type-nav ',
    // customPaging: function(slider, i) {
        //     return '<div class="thumbnails2">' +$(slider.$slides[i]).find('img').prop('outerHTML')+ '</div>';
    // }
});

$('.gallery-type-nav ').slick({
    // slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.gallery-type2',
    dots: false,
    arrows: false,    
    centerMode: true,
    focusOnSelect: true,
    variableWidth: true
  });
