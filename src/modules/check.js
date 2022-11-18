"use strict";
const check = () => {
    const checked = () => {
        const formName = document.querySelector('[name="fio"]');
        const formPhone = document.querySelector('[name="tel"]');
    
        const addName = (event) => {
            event.target.value = event.target.value.replace(/[^а-яё]/gi, "");
        };  
        const addPhone = (event) => {
            event.target.value = event.target.value.replace(/[^0-9+]/gi, "");
        };   
        formName.addEventListener('input', addName);    
        formPhone.addEventListener('input', addPhone);

    };
    checked();
};
export default check;
