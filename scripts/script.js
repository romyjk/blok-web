// JavaScript Document

/* hamburger menu */

/* uitklappen */

var buttonHamburgerMenu = document.querySelector("header nav:first-of-type ul:first-of-type li:first-of-type button");
var hamburgerMenu = document.querySelector("header nav:first-of-type ul:nth-of-type(2)");

function showMenu() {
    hamburgerMenu.classList.add("menu");
}

buttonHamburgerMenu.addEventListener("click", showMenu);

/* inklappen */

var sluitHamburgerMenu = document.querySelector("header nav:first-of-type ul:nth-of-type(2) li:first-of-type button");

function hideMenu() {
    hamburgerMenu.classList.remove("menu");
}

sluitHamburgerMenu.addEventListener("click", hideMenu);