"use strict";
import { animate } from "./helpers";
const modalСall = () => {
    const modal = document.querySelector('.modal-callback');
    const modalOverlay = document.querySelector('.modal-overlay');
    const modalBtn = document.querySelectorAll('.fancyboxModal');

    const modalMenu = () => {
        modalBtn.forEach(btn => {
            btn.addEventListener('click', () => {
                animate({
                    duration: 400,
                    timing(timeFraction) {
                        return timeFraction;
                    },
                    draw(progress) {
                        modal.style.left = (50 * progress) + '%';
                        modal.style.top = (25 * progress) + '%';
                    }
                });
                modalOverlay.style.display = 'block';
                modal.style.display = 'block';
            });
        });

        modalOverlay.addEventListener('click', (e) => {
            if (e.target.closest('.modal-overlay') || e.target.classList.contains('.modal-close')) {
                modalOverlay.style.display = 'none';
                modal.style.display = 'none';
            }
        });
    };
    modalMenu();
};
export default modalСall;
