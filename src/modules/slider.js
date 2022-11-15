const slider = () => {
    const tableText = document.querySelectorAll('.table');
    const slides = document.querySelectorAll('.item');
    let currentSlide = 0;

    tableText.forEach(item => {
        item.classList.add("active");
    });

    const prevSlide = () => {
        slides[currentSlide].classList.remove('item-relative-active');
        slides[currentSlide].classList.add('item-relative-hide');
    };
    const nextSlide = () => {
        slides[currentSlide].classList.add('item-relative-active');
        slides[currentSlide].classList.remove('item-relative-hide');
    };

    const autoSlide = () => {
        prevSlide();
        currentSlide++;
        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }
        nextSlide();
    }; 

    const startSlide = () => {
        setInterval(autoSlide, 3000);
    };

    startSlide();
};
export default slider;
