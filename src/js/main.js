console.log(`Loaded main.js aserg`);


let openMenuBtn = document.querySelector('.menu-button');
let closeMenuBtn = document.querySelector('.close-button');

let headerIs = document.querySelector('.header');

openMenuBtn.addEventListener('click', ()=>{
    headerIs.classList.add('open-header')
});

closeMenuBtn.addEventListener('click', ()=>{
    headerIs.classList.remove('open-header')
});

let dropsBtns = document.querySelectorAll('.dropup');


dropsBtns.forEach((item, e)=>{
    item.addEventListener('click', (e)=>{
        console.log(item);
        
        if(item.classList.contains("open")){
            item.classList.remove("open");
        } else {
            item.classList.add("open");

        }

    })
})


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

var input = document.querySelector("#phone");
  window.intlTelInput(input, {
    showFlags: true,
    separateDialCode: true,
    allowDropdown: true,
    preferredCountries: ["ua","pl", "md" ],
    utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/utils.js",
  });
// // Vanilla Javascript
// var input = document.querySelector("#phone");
// window.intlTelInput(input,({
//   // options here
//   allowDropdown: true,
//   autoInsertDialCode: true,
//   autoPlaceholder: "polite",
//   initialCountry: "",
//   showFlags: true,
// }));


// $("#phone").intlTelInput({
//   hiddenInput: "full_number",                         
//   nationalMode: false,
//   formatOnDisplay: true,           
//   separateDialCode: true,
//   autoHideDialCode: true, 
//   autoPlaceholder: "aggressive" ,
//   initialCountry: "auto",
//   placeholderNumberType: "MOBILE",
//   preferredCountries: ['il','ge'], 

//   utilsScript: "js/utils.js",
//   // options here

// });


// var input = document.querySelector("#phone");
// var errorMap = ["Invalid number", "Invalid country code", "Too short", "Too long", "Invalid number"];
//     window.addEventListener("load", function () {
        
//         errorMsg = document.querySelector("#error-msg"),
//  validMsg = document.querySelector("#valid-msg");
//         var iti = window.intlTelInput(input, {
//             utilsScript:"https://cdn.jsdelivr.net/npm/intl-tel-input@16.0.2/build/js/utils.js"
//         });
//         window.intlTelInput(input, {
//             // allowDropdown: false,
//             // autoHideDialCode: false,
//             // autoPlaceholder: "off",
//             // dropdownContainer: document.body,
//             // excludeCountries: ["us"],
//             // formatOnDisplay: false,
//              geoIpLookup: function(callback) {
//          $.get("https://ipinfo.io", function() {}, "jsonp").always(function(resp) {
//            var countryCode = (resp && resp.country) ? resp.country : "";
//            callback(countryCode);
//          });
//        },
//             // hiddenInput: "full_number",
//             initialCountry: "auto",
           
//             // localizedCountries: { 'de': 'Deutschland' },
//             //nationalMode: false,
//             // onlyCountries: ['us', 'gb', 'ch', 'ca', 'do'],
//             placeholderNumberType: "MOBILE",
//             // preferredCountries: ['cn', 'jp'],
//             // separateDialCode: true,
//             utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@16.0.2/build/js/utils.js",
//         });
//         $(validMsg).addClass("hide");
//         input.addEventListener('blur', function () {
//             reset();
//             if (input.value.trim()) {
//                 if (iti.isValidNumber()) {
//                     validMsg.classList.remove("hide");
//                 } else {
//                     input.classList.add("error");
//                     var errorCode = iti.getValidationError();
//                     errorMsg.innerHTML = errorMap[errorCode];
//                     errorMsg.classList.remove("hide");
//                 }
//             }
//         });
        
//         input.addEventListener('change', reset);
//         input.addEventListener('keyup', reset);
//     });

    
//     var reset = function () {
//         input.classList.remove("error");
//         errorMsg.innerHTML = "";
//         errorMsg.classList.add("hide");
//         validMsg.classList.add("hide");
//     };
//  $(document).ready(function () {
//         $("#phone").val("+917773859");
//     });