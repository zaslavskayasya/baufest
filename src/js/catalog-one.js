console.log('catalog ONE');

$('.catalog-slider').slick({
    dots: true,
    // centerMode: true,
    focusOnSelect: true,
    arrows: true,
    slidesToScroll: 1,
    slidesToShow: 1,
    customPaging: function(slider, i) {
        return '<div class="thumbnails">' +$(slider.$slides[i]).find('img').prop('outerHTML')+ '</div>';
    }
});

$('.scheme-slider').slick({
  dots: true,
  // centerMode: true,
  focusOnSelect: true,
  arrows: true,
  slidesToScroll: 1,
  slidesToShow: 1,
  customPaging: function(slider, i) {
      return '<div class="thumbnails">' +$(slider.$slides[i]).find('img').prop('outerHTML')+ '</div>';
  }
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
  
  //after window is completed load
  //1 class selector for marquee
  //2 marquee speed 0.2
  window.addEventListener('load', Marquee('.marquee', 0.6))
  
  
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