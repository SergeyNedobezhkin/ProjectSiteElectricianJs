const smoothScroll = () => {
    const goTopBtn = document.querySelector('.up');
    const topMenu = document.querySelectorAll('.top-menu > ul > li > a[href^="#"]');

    // Скролл по стрелке
    goTopBtn.style.display = 'none';
    function trackScroll() {
        const offSet = window.pageYOffset;

        if (offSet > 550) {
            goTopBtn.style.display = 'block';
        } else {
            goTopBtn.style.display = 'none';
        }
    }

    function goTop() {
        if (window.pageYOffset > 0) {
            window.scrollBy(0, -40);
            setTimeout(goTop, 0);
        }
    }

    // Скролл по кнопкам в меню
    for (let anchor of topMenu) {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const blockID = anchor.getAttribute('href').substring(1);
            document.getElementById(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    }

    goTopBtn.addEventListener('click', goTop);
    window.addEventListener('scroll', trackScroll);
};
export default smoothScroll;
