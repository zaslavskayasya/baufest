
let catalogSlider = $('.catalog-slider')

catalogSlider.slick({
  dots: false,
  arrows: true,
  // slidesToScroll: 1,
  slidesToShow: 1,
  asNavFor: '.gallery-type-nav',
  focusOnSelect: true,
  infinite: false,
});


let sliderNavCatalog = $('.gallery-type-nav');
let countSlideCatalog = sliderNavCatalog.find('.slide').length;

sliderNavCatalog.slick({
  asNavFor: '.catalog-slider',
  dots: false,
  arrows: false,
  centerMode: false,
  focusOnSelect: true,
  variableWidth: false,
  slidesToShow: countSlideCatalog > 8 ? 10 : 7,
  infinite: countSlideCatalog > 8,
});




let schemeSlider = $('.scheme-slider');

schemeSlider.slick({
  dots: false,
  arrows: true,
  // slidesToScroll: 1,
  slidesToShow: 1,
  asNavFor: '.gallery-type-nav2',
  focusOnSelect: true,
  infinite: false,
});

let sliderNav = $('.gallery-type-nav2');
let countSlide = sliderNav.find('.slide').length;

sliderNav.slick({
  asNavFor: '.scheme-slider',
  dots: false,
  arrows: false,
  centerMode: false,
  focusOnSelect: true,
  variableWidth: false,
  slidesToShow: countSlide > 8 ? 10 : 7,
  infinite: countSlide > 8,
});


let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}




let allTabs = document.querySelectorAll('.size-tab');
let elementsWithDataTab = document.querySelectorAll('[data-tab]');


allTabs.forEach((el) => {

  el.addEventListener("click", ()=> {

    allTabs.forEach((els) => {
      els.classList.remove('active');
    });

    elementsWithDataTab.forEach((tabs)=>{
      tabs.classList.remove('active');
    });

    let ourSize = el.dataset.size;
    let shouldBeactive = document.querySelectorAll('[data-tab="' + ourSize + '"]');

    shouldBeactive.forEach((activeParams) => {
      activeParams.classList.add('active');
    })

    el.classList.add('active');

  })

})
//# sourceMappingURL=catalog-one.js.map