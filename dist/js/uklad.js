console.log('ukladannya');

let input = document.querySelector("#phone");
window.intlTelInput(input, {
  showFlags: true,
  separateDialCode: true,
  allowDropdown: true,
  preferredCountries: ["ua","pl", "md" ],
  utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/utils.js",
});
//# sourceMappingURL=uklad.js.map