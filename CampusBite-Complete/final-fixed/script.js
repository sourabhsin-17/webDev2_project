// Small progressive enhancement: update footer year.
const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();
