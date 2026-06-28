// Form and Inputs
const form = document.getElementById("registerForm");

const nameInput = document.getElementById("name");
const mobileInput = document.getElementById("mobile");
const dobInput = document.getElementById("dob");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");

const matchMessage = document.getElementById("matchMessage");

// ================= SHOW / HIDE PASSWORD =================

document.getElementById("togglePassword").addEventListener("click", () => {

    const eyeIcon = document.getElementById("eyeIcon");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        eyeIcon.className = "bi bi-eye-slash-fill";
    }
    else {
        passwordInput.type = "password";
        eyeIcon.className = "bi bi-eye-fill";
    }

});

document.getElementById("toggleConfirmPassword").addEventListener("click", () => {

    const eyeIcon = document.getElementById("confirmEyeIcon");

    if (confirmPasswordInput.type === "password") {
        confirmPasswordInput.type = "text";
        eyeIcon.className = "bi bi-eye-slash-fill";
    }
    else {
        confirmPasswordInput.type = "password";
        eyeIcon.className = "bi bi-eye-fill";
    }

});

// ================= PASSWORD MATCH =================

function checkPasswordMatch() {

    if (confirmPasswordInput.value === "") {

        matchMessage.innerHTML = "";
        confirmPasswordInput.classList.remove("is-valid", "is-invalid");
        return;

    }

    if (passwordInput.value === confirmPasswordInput.value) {

        confirmPasswordInput.classList.add("is-valid");
        confirmPasswordInput.classList.remove("is-invalid");

        matchMessage.innerHTML =
            '<span class="text-success"><i class="bi bi-check-circle-fill"></i> Passwords matched</span>';

    }
    else {

        confirmPasswordInput.classList.add("is-invalid");
        confirmPasswordInput.classList.remove("is-valid");

        matchMessage.innerHTML =
            '<span class="text-danger"><i class="bi bi-x-circle-fill"></i> Passwords do not match</span>';
    }

}

passwordInput.addEventListener("input", checkPasswordMatch);
confirmPasswordInput.addEventListener("input", checkPasswordMatch);


// ================= LIVE EMAIL VALIDATION =================

emailInput.addEventListener("input", () => {

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(emailInput.value.trim())) {

        emailInput.classList.add("is-valid");
        emailInput.classList.remove("is-invalid");

    }
    else {

        emailInput.classList.add("is-invalid");
        emailInput.classList.remove("is-valid");

    }

});


// ================= REMOVE ERROR WHILE TYPING =================

document.querySelectorAll(".form-control").forEach(input => {

    input.addEventListener("input", () => {

        input.classList.remove("is-invalid");

    });

});


// ================= FORM SUBMIT =================

form.addEventListener("submit", function (e) {

    e.preventDefault();

    let valid = true;

    // Name
    if (!/^[A-Za-z ]+$/.test(nameInput.value.trim())) {

        nameInput.classList.add("is-invalid");
        valid = false;

    }

    // Mobile
    if (!/^[0-9]{10}$/.test(mobileInput.value.trim())) {

        mobileInput.classList.add("is-invalid");
        valid = false;

    }

    // DOB
    if (dobInput.value === "") {

        dobInput.classList.add("is-invalid");
        valid = false;

    }

    // Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(emailInput.value.trim())) {

        emailInput.classList.add("is-invalid");
        valid = false;

    }

    // Password
    const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

    if (!passwordRegex.test(passwordInput.value)) {

        passwordInput.classList.add("is-invalid");
        valid = false;

    }

    // Confirm Password
    if (passwordInput.value !== confirmPasswordInput.value) {

        confirmPasswordInput.classList.add("is-invalid");
        valid = false;

    }

    // Success
    if (valid) {

        let toast =
            new bootstrap.Toast(document.getElementById("successToast"));

        toast.show();

        form.reset();

        document.querySelectorAll(".form-control").forEach(input => {

            input.classList.remove("is-valid");
            input.classList.remove("is-invalid");

        });

        matchMessage.innerHTML = "";

    }

});

// Form Elements
const loginForm = document.getElementById("loginForm");
const mobileInput = document.getElementById("mobile");
const passwordInput = document.getElementById("password");

// ================= SHOW / HIDE PASSWORD =================

document.getElementById("togglePassword").addEventListener("click", () => {

    const eyeIcon = document.getElementById("eyeIcon");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        eyeIcon.className = "bi bi-eye-slash-fill";
    }
    else {
        passwordInput.type = "password";
        eyeIcon.className = "bi bi-eye-fill";
    }

});

// ================= REMOVE ERROR WHILE TYPING =================

document.querySelectorAll(".form-control").forEach(input => {

    input.addEventListener("input", () => {

        input.classList.remove("is-invalid");

        if (input.value.trim() !== "") {
            input.classList.add("is-valid");
        }
        else {
            input.classList.remove("is-valid");
        }

    });

});

// ================= LOGIN VALIDATION =================

loginForm.addEventListener("submit", function (e) {

    e.preventDefault();

    let valid = true;

    // Mobile Validation
    if (!/^[0-9]{10}$/.test(mobileInput.value.trim())) {

        mobileInput.classList.add("is-invalid");
        mobileInput.classList.remove("is-valid");
        valid = false;

    }

    // Password Validation
    if (passwordInput.value.trim() === "") {

        passwordInput.classList.add("is-invalid");
        passwordInput.classList.remove("is-valid");
        valid = false;

    }

    // Login Success
    if (valid) {

        alert("Login Successful!");

        // Redirect to homepage
        // window.location.href = "index.html";

        loginForm.reset();

        document.querySelectorAll(".form-control").forEach(input => {
            input.classList.remove("is-valid");
        });

    }

});

//paymentjs
const paymentMethod = document.getElementById("paymentMethod");

document.getElementById("payBtn").addEventListener("click", ()=>{

    if(paymentMethod.value==""){
        alert("Please select a payment method.");
        return;
    }

    alert("Payment Successful!");

    // Redirect to success page
    window.location.href="success.html";

});