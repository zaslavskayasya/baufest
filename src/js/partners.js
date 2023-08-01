let input = document.querySelector("#phone");
window.intlTelInput(input, {
  showFlags: true,
  separateDialCode: true,
  allowDropdown: true,
  preferredCountries: ["ua","pl", "md" ],
  utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/utils.js",
});


let input2 = document.querySelector("#phone2");
window.intlTelInput(input2, {
  showFlags: true,
  separateDialCode: true,
  allowDropdown: true,
  preferredCountries: ["ua","pl", "md" ],
  utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/utils.js",
});