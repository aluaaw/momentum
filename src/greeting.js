const greetingContainer = document.querySelector(`.js-greeting`);
const greeting = greetingContainer.querySelector(`h3`);

const SHOWING = "block";

function checkUser() {
    const currentUser = localStorage.getItem(`username`);
    if (currentUser !== null) {
        greeting.style.display = SHOWING;
        return greeting.innerText = `Hello, ${currentUser}`;
    } else {
        return greeting.innerText = "no user";
    }
}

function init() {
    checkUser();
}

init();