const firstNameInput = document.querySelector('input[placeholder="First Name"]');
const lastNameInput = document.querySelector('input[placeholder="Last Name"]');
const emailInput = document.querySelector('input[placeholder="Email"]');
const passwordInput = document.querySelector('input[placeholder="Password"]');
const confirmPasswordInput = document.querySelector('input[placeholder="Confirm Password"]');
const genderInputs = document.querySelectorAll('input[name="s1"]');
const birthDateInput = document.querySelector('input[name="bday"]');
const btnRegister = document.querySelector('input[type="submit"]');

btnRegister.addEventListener("click", (e) => {
    e.preventDefault();
    if (!firstNameInput.value.trim() || !lastNameInput.value.trim()) {
        alert("First Name and Last Name cannot be empty.");
        return;
    }
    const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (!emailRegex.test(emailInput.value.trim())) {
        alert("Email must be in the format of @gmail.com.");
        return;
    }
    if (passwordInput.value.trim().length < 8) {
        alert("Password must be at least 8 characters.");
        return;
    }
    if (passwordInput.value.trim() !== confirmPasswordInput.value.trim()) {
        alert("Passwords do not match.");
        return;
    }
    const selectedGender = [...genderInputs].find(input => input.checked);
    if (!selectedGender) {
        alert("Please select a gender.");
        return;
    }
    const genderText = selectedGender.nextElementSibling.textContent.trim();

    if (!birthDateInput.value.trim()) {
        alert("Please select your birth date.");
        return;
    }
    const user = {
        firstName: firstNameInput.value.trim(),
        lastName: lastNameInput.value.trim(),
        email: emailInput.value.trim(),
        password: passwordInput.value.trim(),
        gender: genderText,
        birthDate: birthDateInput.value.trim(),
        loginStatus: false,
    };
    
    const json = JSON.stringify(user);
    localStorage.setItem("username", json);

    alert("Registration successful!");
    window.location.href = "login.html";
});
