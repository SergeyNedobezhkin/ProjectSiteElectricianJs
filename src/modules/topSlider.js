const topSlider = () => {
    const slides = document.querySelectorAll('.item');
    const tableText = document.querySelectorAll('.table');
    let currentSlide = 0;

    tableText[currentSlide].classList.add("active");

    const prevSlide = () => {
        slides[currentSlide].style.display = "none";
        tableText[currentSlide].classList.remove("active");
    };

    const nextSlide = () => {
        slides[currentSlide].style.display = "block";
        tableText[currentSlide].classList.add("active");
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
export default topSlider;