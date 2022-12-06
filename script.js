// hide menu 
const hideMenu = function() {
    const menu = document.getElementById("menu");
    menu.classList.add("hide-menu");
};
hideMenu();

// open menu
const getMenu = function() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("hide-menu"); 
};

const clickOnImg = function() {
    const img = document.getElementById("img-menu");
    img.addEventListener("click", function() {
        getMenu();
    });
};
clickOnImg();



// home 
const homeColor = function() {
    const body = document.body;
    body.classList.add("home-bg");
    body.classList.remove("red-bg", "orange-bg", "purple-bg", "green-bg");
};

const clickOnHome = function() {
    const home = document.getElementById("click-home");
    home.addEventListener("click", function() {
        homeColor();
        hideMenu();
    });
};
clickOnHome();


// red
const redColor = function() {
    const body = document.body;
    body.classList.add("red-bg");
    body.classList.remove("home-bg", "orange-bg", "purple-bg", "green-bg");
};

const clickOnRed = function() {
    const red = document.getElementById("click-red");
    red.addEventListener("click", function() {
        redColor();
        hideMenu();
    });
};
clickOnRed();


// orange
const orangeColor = function() {
    const body = document.body;
    body.classList.add("orange-bg");
    body.classList.remove("home-bg", "red-bg", "purple-bg", "green-bg");
};

const clickOnOrange = function() {
    const orange = document.getElementById("click-orange");
    orange.addEventListener("click", function() {
        orangeColor();
        hideMenu();
    });
};
clickOnOrange();


// purple
const purpleColor = function() {
    const body = document.body;
    body.classList.add("purple-bg");
    body.classList.remove("home-bg", "red-bg", "orange-bg", "green-bg");
};

const clickOnPurple = function() {
    const purple = document.getElementById("click-purple");
    purple.addEventListener("click", function() {
        purpleColor();
        hideMenu();
    });
};
clickOnPurple();


// green
const greenColor = function() {
    const body = document.body;
    body.classList.add("green-bg");
    body.classList.remove("home-bg", "red-bg", "orange-bg", "purple-bg");
};
    
const clickOnGreen = function() {
    const green = document.getElementById("click-green");
    green.addEventListener("click", function() {
        greenColor();
        hideMenu();
    });
};
clickOnGreen();
