// TOGGLE SIDE MENU 
const toggleSideMenu = document.querySelector("#toggle-menu");
const sideMenu = document.querySelector(".side-menu");
const exitSideMenu = document.querySelector("#exit-icon");

toggleSideMenu.addEventListener("click", function () {
    sideMenu.style.display = "block";
})
exitSideMenu.addEventListener("click", function () {
    sideMenu.style.display = "none";
})

// CATEGORY DROPDOWN IN SIDE MENU
const dropdown = document.querySelector(".dropdown-toggle");
const categoryDrop = document.querySelector(".category-side-dropdown");
const dropdownIcon = document.querySelector(".arrowdown-icon");


dropdown.addEventListener("click", function () {
    if (categoryDrop.style.display === "block") {
        dropdownIcon.style.transform = "none";
        categoryDrop.style.display = "none";

    } else {
        dropdownIcon.style.transform = "rotate(180deg)";
        categoryDrop.style.display = "block";

    }
})

// ADD TO WISHLIST HEART

const heart = document.querySelector(".heart");

heart.addEventListener("click", function () {
    heart.src = "./img/icons/red-heart.png"
})
heart.addEventListener("mouseover", function () {
    if (heart.src = "./img/icons/empty-heart.png") {
        heart.src = "./img/icons/full-heart.png"
    }
})
heart.addEventListener("mouseout", function () {
    if (heart.src = "./img/icons/full-heart.png") {
        heart.src = "./img/icons/empty-heart.png"
    }
})