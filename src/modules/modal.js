"use strict";
import {animate} from "./helpers";
const modal = () => {
    const modalCallback = document.getElementById('callback');
    const modalOverlay  = document.querySelector('.modal-overlay');
    const modalClose = document.querySelector('.modal-close');
    const callbackBtn = document.querySelectorAll('.callback-btn');

    const modalMenu = () => {
  
        callbackBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            animate({
                duration: 400,
                timing(timeFraction) {
                    return timeFraction;
                },
                draw(progress) {
                    modalCallback.style.left = (50 * progress) + '%';
                    modalCallback.style.top = (25 * progress) + '%';
                }
            });
            console.log("Hello");
            modalOverlay.style.display = 'block';
            modalCallback.style.display = 'block';
        });
        modalClose.addEventListener('click', (e) => {
            modalOverlay.style.display = 'none';
            modalCallback.style.display = 'none';
        });
        });
    };
    modalMenu();
};
export default modal;
