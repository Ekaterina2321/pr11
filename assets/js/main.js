'use strict';

let menuElems = document.querySelectorAll('.menu-elem');

menuElems.forEach(menuElem => {
    let submenu = menuElem.querySelector('.submenu');
    let btn = menuElem.querySelector('.menu-btn');

    menuElem.addEventListener('mouseenter', function () {
        submenu.classList.add('active')
        btn.classList.add('active')
    })

    menuElem.addEventListener('mouseleave', function () {
        submenu.classList.remove('active')
        btn.classList.remove('active')
    })
})


let links = document.querySelectorAll("#dropdownContent a");
let imageDisplay = document.getElementById("imageDisplay");

links.forEach(link => {
    link.addEventListener("click", function (event) {
        event.preventDefault(); 
        let imgSrc = this.getAttribute("data-img");
        imageDisplay.src = imgSrc;
        imageDisplay.classList.remove("hidden");
        setTimeout(() => {
            imageDisplay.classList.add('hidden');
        }, 10000);
    });
});





