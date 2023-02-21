let mobileIconMenu = document.querySelector(".hamburger-menu")
let closeMobileMenu = document.querySelector('.close-icon');
let mobileMenu = document.querySelector('.mobile-menu');
let overflow = document.querySelector('.overflow');
closeMobileMenu.addEventListener("click", function() {
  mobileMenu.classList.remove("menu-open")
  overflow.classList.remove("active")
})
mobileIconMenu.addEventListener("click", function() {
  mobileMenu.classList.add("menu-open")
  overflow.classList.add("active")
})