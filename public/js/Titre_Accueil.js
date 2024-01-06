let button_element = document.querySelector(".btn");
let navElement = document.querySelector("#nav_id");
let listElements = document.querySelectorAll("#nav_id ul li");
let button_element1 = document.querySelector(".btn1");

let isNavVisible = false;

function toggleNav() {
    isNavVisible = !isNavVisible;
    if (isNavVisible) {
        for (let i = 0; i < listElements.length; i++) {
            listElements[i].style.marginRight = "2rem";
        }
    } else {
        for (let i = 0; i < listElements.length; i++) {
            listElements[i].style.marginRight = "-20rem";
        }
    }
}

function rediriger() {
        window.location.href = "/creer-compte";
    }

button_element.addEventListener('click', toggleNav);
button_element1.addEventListener('click', rediriger);

