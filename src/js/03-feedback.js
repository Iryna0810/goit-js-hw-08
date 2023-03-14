import { throttle } from "lodash";


const formEl = document.querySelector('.feedback-form');

const STORAGE_KEY = 'feedback-form-state';

let formData = {};



formEl.addEventListener('submit', handleFormSubmit);

formEl.addEventListener('input', throttle(handleFormInput, 500))


function handleFormInput(event) {

    formData[event.target.name] = event.target.value;
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}


populateForm();


function handleFormSubmit(event) {
    
    event.preventDefault();

    console.log(formData);

    event.currentTarget.reset();

    localStorage.removeItem(STORAGE_KEY);

    formData = {};
}



function populateForm() {
    try {
        const savedData = localStorage.getItem(STORAGE_KEY);
    
        if (savedData) {
        
            formData = JSON.parse(savedData);
        
            Object.entries(formData).forEach(([key, value]) => {
                formEl[key].value = value;
            });

        }
    } catch (error) {
            console.error("Get state error: ", error.message);
    }
    };

