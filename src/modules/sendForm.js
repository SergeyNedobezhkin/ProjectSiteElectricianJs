"use strict";
const sendForm = (formName) => {
    const form = document.getElementsByName(formName)[0];
    form.querySelector('[name="tel"]').setAttribute("required", '');
    const statusBlock = document.createElement('div');
    let loadText = 'Загрузка...';
    let errorText = 'Ошибка...';
    const successText = 'Спасибо! Наш менеджер с вами свяжется!';

    const isValid = (e) => {
        if (e.target.matches('[name="fio"]')) {
            let value = e.target.value;
            if (value.replace(/^[а-яё][а-яё\' ']{1,20}$/gi, "")) {
                e.target.classList.remove("success");
                e.target.classList.add("error");
                e.target.style = 'border:solid; border-width: 5px; border-color: red;';
                value = false;
            }
            else if (!value.replace(/^[а-яё][а-яё\' ']{1,20}$/gi, "")) {
                e.target.classList.remove("error");
                e.target.style = '';
                e.target.classList.add("success");
                value = true;
            }
            return validate(value);
        }

        if (e.target.matches('[name="tel"]')) {
            let value = e.target.value;
            if (value.replace(/^\+?[78][-\(]?\d{3}\)?-?\d{0,3}-?\d{2}-?\d{0,3}$/i, '')) {
                e.target.classList.remove("success");
                e.target.classList.add("error");
                e.target.style = 'border:solid; border-width: 5px; border-color: red;';
                value = false;
            }
            else if (!value.replace(/^\+?[78][-\(]?\d{3}\)?-?\d{0,3}-?\d{2}-?\d{0,3}$/i, '')) {
                {
                    e.target.classList.remove("error");
                    e.target.style = '';
                    e.target.classList.add("success");
                    value = true;
                }
            }
            return validate(value);
        }
    };
    const validate = (list) => {

        let success = true;
        Array.from(list).forEach(input => {
            if (!input.classList.contains('success')) {
                success = false;
            }
        });
        return success;
    };
    // ./#callback/server.php
    // Отправленние данных
    const sendData = (data) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
          
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json'
            }
        }).then(res => res.json());
    };
    //  Отправить форму
    const submitForm = (e) => {
        const formElements = form.querySelectorAll('.form-control');
        const formData = new FormData(form);
        const formBody = {};
     
       
        formData.forEach((val, key) => {
     
            statusBlock.textContent = loadText;
            if (val !== '') {
                formBody[key] = val;
            }


            statusBlock.style = "color: black;";
            form.append(statusBlock);
        });

        // Отправленные данные
        if (validate(formElements)) {
      
            sendData(formBody)
                .then(data => {
                    statusBlock.textContent = successText;

                    if (statusBlock.textContent === successText) {
                        setTimeout(function () {
                            statusBlock.style.display = 'none';
                        }, 3000);
                    }
                    formElements.forEach(input => {
                        input.value = '';
                    });
                })
                .catch(error => {
                    statusBlock.textContent = errorText;
                });
        } else {
            statusBlock.textContent = "";
        }
    };
    try {
        if (!form) {
            throw new Error('Верните форму на место, пожалуйста!!!');
        }
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            submitForm();
        });
    } catch (error) {
        console.log(error.message);
    }

    form.addEventListener('input', isValid);

};
export default sendForm;
