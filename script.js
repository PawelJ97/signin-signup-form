//----SWITCH----
const sign_up_btn = document.querySelector("#sign-up-btn");
const sign_in_btn = document.querySelector("#sign-in-btn");
const container = document.querySelector(".container");
const sign_up_btn2 = document.querySelector("#sign-up-btn2");
const sign_in_btn2 = document.querySelector("#sign-in-btn2");

//----SING IN---
const userNameA = document.querySelector("#usernameA");
const password1A = document.querySelector("#password1A");
const loginButton = document.querySelector("#sub-login");

//----SING UP----
const userNameB = document.querySelector("#usernameB");
const email = document.querySelector("#e-mail");
const password1B = document.querySelector("#password1B");
const password2B = document.querySelector("#password2B");
const sendButton = document.querySelector("#sub-sign-up");
const clearButton = document.querySelector("#sub-clear");

const form = document.querySelector(".sign-up-form");

//----Functions----

//----Login message----
function information() {
    if (userNameA.value == "what1234" && password1A.value == "admin4321") {
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Login successfule",
            showConfirmButton: false,
            timer: 1500,
        });
    } else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
        });
    }
}
function showErrorMessage(input, message) {
    const box = input.parentElement;
    const errorMessage = box.querySelector(".error");
    errorMessage.textContent = message;
}
function hideErrorMessage(input) {
    const box = input.parentElement;
    const errorMessage = box.querySelector(".error");
    errorMessage.textContent = "";
}

function checkPasswords(password1B, password2B) {
    if (password1B.value !== password2B.value) {
        showErrorMessage(password2B, "Passwords don't match");
    } else {
        hideErrorMessage(password2B);
    }
}

function checkInputsLength(input, minValue) {
    if (input.value.length < minValue) {
        showErrorMessage(
            input,
            `Field should contain at least ${minValue} characters`
        );
    } else {
        hideErrorMessage(input);
    }
}

function checkEmail(email) {
    const regex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regex.test(email.value)) {
        showErrorMessage(email, "Invalid E-mail");
    } else {
        hideErrorMessage(email);
    }
}

//----EVENTS AFTER SUBMIT SIGN UP----
sendButton.addEventListener("click", (e) => {
    e.preventDefault();

    checkPasswords(password1B, password2B);
    checkInputsLength(userNameB, 5);
    checkInputsLength(password1B, 8);
    checkEmail(email);
});

//----EVENT -CLEAR ALL- AFTER SUBMIT CLEAR---
clearButton.addEventListener("click", (e) => {
    e.preventDefault();

    form.reset();
    const errors = document.querySelectorAll(".error");
    errors.forEach((err) => {
        err.textContent = "";
    });
});
//----EVENTS AFTER SUBMIT LOGIN---
loginButton.addEventListener("click", (e) => {
    e.preventDefault();

    checkInputsLength(userNameA, 5);
    checkInputsLength(password1A, 8);
    information();
});

//creating a form switch
sign_up_btn.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
});
sign_in_btn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
});

//switch for small screen-Responsive
sign_up_btn2.addEventListener("click", () => {
    container.classList.add("sign-up-mode2");
});
sign_in_btn2.addEventListener("click", () => {
    container.classList.remove("sign-up-mode2");
});
