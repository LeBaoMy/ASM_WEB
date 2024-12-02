
const inputEmail = document.querySelector('input[placeholder="Email"]');
const inputPassword = document.querySelector('input[placeholder="Password"]');
const loginButton = document.querySelector('.button-1');


loginButton.addEventListener("click", (e) => {
    e.preventDefault();

    const storedUser = localStorage.getItem("username");

    if (storedUser) {
        const userObject = JSON.parse(storedUser);
        if (userObject.email == inputEmail.value && userObject.password == inputPassword.value) {
            // Lấy dữ liệu từ localStorage
            const jsonData = localStorage.getItem("username");

            if (jsonData) {
                // Chuyển đổi JSON thành đối tượng
                const user = JSON.parse(jsonData);

                // Thêm trường mới, ví dụ thêm `phoneNumber`
                user.loginStatus = true;

                // Chuyển đổi đối tượng lại thành JSON
                const updatedJson = JSON.stringify(user);

                // Ghi lại vào localStorage
                localStorage.setItem("username", updatedJson);

                console.log("Updated user:", user);
            } else {
                console.log("No user data found in localStorage.");
            }

            location.href = "Home.html"
        } else {
            alert("Incorrect password or email")
        }
    }
});
