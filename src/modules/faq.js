"use strict";
const faq = () => {
    const accordeons = document.querySelectorAll('.accordeon');

    accordeons.forEach(box => {
        box.addEventListener('click', accordeonHandler);

        function accordeonHandler(e) {
            e.preventDefault();
            let currentAcc = e.target.closest('.accordeon > .element');
            let currentAccContant = e.target.nextElementSibling;
            currentAcc.classList.toggle('active');
            if (currentAcc.classList.contains("active")) {
                currentAccContant.style.display = 'block';
                currentAccContant.style.maxHeight = currentAccContant.scrollHeight + "px";
            } else {
                currentAccContant.style.maxHeight = 0;
                currentAccContant.style.display = 'none';
            }
        }
    });
};
export default faq;