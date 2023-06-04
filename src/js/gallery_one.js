console.log('one gallery');

$('.gallery-type2').slick({
    dots: true,
    // centerMode: true,
    focusOnSelect: true,
    arrows: true,
    slidesToScroll: 1,
    slidesToShow: 1,
    customPaging: function(slider, i) {
        return '<div class="thumbnails2">' +$(slider.$slides[i]).find('img').prop('outerHTML')+ '</div>';
    }
});