"use strict";
import { animate } from "./helpers";
const modalServices = () => {
    const modal= document.querySelectorAll('.button-services');
    const modalCallback = document.getElementById('callback');
    const modalOverlay= document.querySelector('.modal-overlay');
    const modalClose = document.querySelector('.modal-close');

    const modalMenu = () => {
        modal.forEach(btn => {
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
export default modalServices;