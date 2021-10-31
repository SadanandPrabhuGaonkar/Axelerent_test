const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navBar = document.querySelector(".navbar");
const navLink = document.querySelectorAll(".nav-link");
const icon = document.querySelector("#hamburger-icon");
const body = document.querySelector("body");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    hamburger.classList.toggle("active");
    navBar.classList.toggle("active");
    navMenu.classList.toggle("active");
    body.classList.toggle("active");
    icon.src = "./images/close.png"
    hamburger.removeEventListener("click", mobileMenu)
    hamburger.addEventListener("click", closeMenu);
}

function closeMenu() {
    hamburger.classList.remove("active");
    navBar.classList.remove("active");
    body.classList.remove("active");
    navMenu.classList.remove("active");
    icon.src = "./images/hamburger.png"
    hamburger.removeEventListener("click", closeMenu);
    hamburger.addEventListener("click", mobileMenu);
}

//add active class to show check image on button
$(document).ready(function() {
    $(".check").click(function() {
        $(".check").removeClass("active");
        // $(".tab").addClass("active"); // instead of this do the below 
        $(this).addClass("active");
    });
});

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "flex";
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}