console.log('.about-slider');

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
//# sourceMappingURL=about.js.map