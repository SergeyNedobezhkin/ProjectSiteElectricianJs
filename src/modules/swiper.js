import { animate } from "./helpers";
import Swiper, { Navigation, Pagination } from 'swiper';

const swiperButton = document.querySelector('.services-arrow');
const swiperButtonPrev = swiperButton.querySelector('.arrow-left');
const swiperButtonNext = swiperButton.querySelector(' .arrow-right');


const swiperFunc = () => {
    const swiper = new Swiper('.companies-swiper', {
        modules: [Navigation, Pagination],
        slidesPerView: 1,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: swiperButtonNext,
            prevEl: swiperButtonPrev,
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 40,
            },

        },

    });

};

const modalSlades = () => {
    const modalMenu = () => {
        const modal = document.querySelectorAll('.element > .absolute ');
        const modalCallback = document.getElementById('callback');
        const modalOverlay = document.querySelector('.modal-overlay');
        const modalClose = document.querySelector('.modal-close');
        modal.forEach(elem => {
            elem.addEventListener('click', () => {
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
export default modalSlades;
export { swiperFunc };