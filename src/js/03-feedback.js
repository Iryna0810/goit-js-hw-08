import { throttle } from "lodash";

const emailInput = document.querySelector('.feedback-form input[type="email"]');
const messageInput = document.querySelector('.feedback-form textarea');
const formData = document.querySelector('.feedback-form');


const formDataArray = {};
const savedData = localStorage.getItem('feedback-form-state', JSON.stringify(formDataArray));

formData.addEventListener('submit', handleFormSubmit);

formData.addEventListener('input', throttle(handleFormInput, 500))

function handleFormInput(event) {

    formDataArray[event.target.name] = event.target.value;
    
    localStorage.setItem("feedback-form-state", JSON.stringify(formDataArray))
}

populateForm();


function handleFormSubmit(event) {
    console.log(JSON.parse(savedData));

    event.preventDefault();

    event.currentTarget.reset();

    localStorage.removeItem('feedback-form-state');
};

function populateForm() {
     
    if (savedData) {
        const savedDataArray = JSON.parse(savedData);
        
        emailInput.value = savedDataArray.email;
        messageInput.value = savedDataArray.message;
    }

}