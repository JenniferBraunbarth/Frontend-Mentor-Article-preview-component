'use strict';

const elements = {};

const domMapping = () => {
    elements.shareBtn = document.querySelector(".icon_share");
    elements.modalView = document.querySelector(".modal");
    elements.shareBtn.addEventListener("click", () => {
        elements.modalView.classList.toggle("view");
    });
    elements.shareBtnMobile = document.querySelector(".share_mobile");
    elements.shareBtnMobile.addEventListener("click", () => {
        elements.modalView.classList.toggle("view");
    });
};

// FUNKTIONEN
const init = () => {
    domMapping();
};

// INIT
init();
