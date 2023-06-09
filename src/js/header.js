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
var modals = document.querySelectorAll(".modal");
var closeBtns = document.querySelectorAll(".close");
var overlay = document.querySelector(".overlay");
var thankYouModal = document.querySelector(".modal-thankYouModal");
var closeThankYouModalBtn = thankYouModal.querySelector(".close");
var forms = document.querySelectorAll(".form");

openModalBtns.forEach(function(btn, index) {
  btn.addEventListener("click", function() {
    openModal(index);
  });
});

closeBtns.forEach(function(btn, index) {
  btn.addEventListener("click", function() {
    closeModal(index);
  });
});

forms.forEach(function(form, index) {
  form.addEventListener("submit", function(event) {
    event.preventDefault();
   

    closeModal(index);
    openThankYouModal();
  });
});

closeThankYouModalBtn.addEventListener("click", function() {
  closeThankYouModal();
});

// console.log(overlay)

modals.forEach(function(ite, index) {
  ite.addEventListener("click", function(e) {
    console.log(e.target);
    if ($(e.target).hasClass('modal-myModal')) {
      closeModal(index);
      overlay.style.display = "none";
    }
  });
});

function openModal(index) {
  modals[index].style.display = "block";
  overlay.style.display = "block";
}

function closeModal(index) {
  modals[index].style.display = "none";
  overlay.style.display = "none";
}

function openThankYouModal() {
  thankYouModal.style.display = "block";
  overlay.style.display = "block";
}

function closeThankYouModal() {
  thankYouModal.style.display = "none";
  overlay.style.display = "none";
}



let inputFlag = document.querySelector(".phone-flag");

  window.intlTelInput(inputFlag, {
    showFlags: true,
    separateDialCode: true,
    allowDropdown: true,
    preferredCountries: ["ua","pl", "md" ],
    utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/utils.js",
  });

