
$('.catalog-slider').slick({
    dots: false,
    // centerMode: true,
    focusOnSelect: true,
    arrows: true,
    slidesToScroll: 1,
    slidesToShow: 1,
    asNavFor: '.gallery-type-nav ',
    // customPaging: function(slider, i) {
    //     return '<div class="thumbnails">' +$(slider.$slides[i]).find('img').prop('outerHTML')+ '</div>';
    // }
});

$('.gallery-type-nav ').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.catalog-slider',
  dots: false,
  arrows: false,    
  centerMode: true,
  focusOnSelect: true,
  variableWidth: true
});





$('.scheme-slider').slick({
  dots: false,
  // centerMode: true,
  focusOnSelect: true,
  arrows: true,
  slidesToScroll: 1,
  slidesToShow: 1,
  asNavFor: '.gallery-type-nav2 ',
  // customPaging: function(slider, i) {
  //     return '<div class="thumbnails">' +$(slider.$slides[i]).find('img').prop('outerHTML')+ '</div>';
  // }
});

$('.gallery-type-nav2 ').slick({
  // slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.scheme-slider',
  dots: false,
  arrows: false,    
  centerMode: true,
  focusOnSelect: true,
  variableWidth: true
});




function Marquee(selector, speed) {
    const parentSelector = document.querySelector(selector);
    const clone = parentSelector.innerHTML;
    const firstElement = parentSelector.children[0];
    let i = 0;
    console.log(firstElement);
    // parentSelector.insertAdjacentHTML('beforeend', clone);
  
    setInterval(function () {
      firstElement.style.marginLeft = `-${i}px`;
      if (i > firstElement.clientWidth) {
        i = 0;
      }
      i = i + speed;
    }, 0);
  }
    
  
  
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