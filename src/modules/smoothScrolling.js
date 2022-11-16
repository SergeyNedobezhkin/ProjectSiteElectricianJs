const smoothScroll = () => {
 const goTopBtn = document.querySelector('.up');
  goTopBtn.style.display = 'none';
    function trackScroll() {
       const offSet= window.pageYOffset;
     
        if (offSet > 550) {
            goTopBtn.style.display = 'block';
        }else {
            goTopBtn.style.display = 'none';
        }
    }

    function goTop() {
        if (window.pageYOffset > 0) {
            window.scrollBy(0,-40);
            setTimeout(goTop,0);
        }
    }
    goTopBtn.addEventListener('click', goTop);
    window.addEventListener('scroll',  trackScroll);
};

export default smoothScroll;
