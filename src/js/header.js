console.log(`header js`);


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
});





var openModalBtns = document.querySelectorAll(".openModal");
var modal = document.querySelector(".modal");
var closeBtns = document.querySelectorAll(".close");
var overlay = document.querySelector(".overlay");
var thankYouModal = document.querySelector(".modal-thankYouModal");
var closeThankYouModalBtn = thankYouModal.querySelector(".close");
var form = document.querySelector(".form");

openModalBtns.forEach(function(btn) {
  btn.addEventListener("click", function() {
    modal.style.display = "block";
    overlay.style.display = "block";
  });
});

closeBtns.forEach(function(btn) {
  btn.addEventListener("click", function() {
    modal.style.display = "none";
    overlay.style.display = "none";
  });
});

form.addEventListener("submit", function(event) {
  event.preventDefault();
  // Виконайте додаткову обробку форми, наприклад, відправку даних на сервер
  // Якщо відправка успішна, виконайте наступне:
  modal.style.display = "none";
  overlay.style.display = "none";
  thankYouModal.style.display = "block";
  overlay.style.display = "block";
});

closeThankYouModalBtn.addEventListener("click", function() {
  thankYouModal.style.display = "none";
  overlay.style.display = "none";
});

let inputFlag = document.querySelector(".phone-flag");

  window.intlTelInput(inputFlag, {
    showFlags: true,
    separateDialCode: true,
    allowDropdown: true,
    preferredCountries: ["ua","pl", "md" ],
    utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/utils.js",
  });

