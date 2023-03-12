import { throttle } from "lodash";

const emailInput = document.querySelector('.feedback-form input[type="email"]');
console.log(emailInput);

const messageInput = document.querySelector('.feedback-form textarea');
console.log(messageInput);

let feedbackFormState = {
    email: localStorage.getItem.email,
    message: localStorage.getItem.message
};

emailInput.addEventListener("input", (event) => {
    feedbackFormState.email = event.currentTarget.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(feedbackFormState))
});

messageInput.addEventListener("input", (event) => {
    feedbackFormState.message = event.currentTarget.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(feedbackFormState))
});