document.addEventListener("DOMContentLoaded", () => {
    const storedUser = localStorage.getItem("username");

    if (storedUser) {
        const user = JSON.parse(storedUser);

        document.getElementById("firstName").textContent = user.firstName || "N/A";
        document.getElementById("lastName").textContent = user.lastName || "N/A";
        document.getElementById("email").textContent = user.email || "N/A";
        document.getElementById("gender").textContent = user.gender || "N/A";
        document.getElementById("birthDate").textContent = user.birthDate || "N/A";
        if (user.loginStatus == false) {
            window.location.href = 'login.html';
        }
    } else {
        alert("No user information found. Please log in.");
        window.location.href = "login.html";
    }

    // Xử lý sự kiện nút Log Out
    const logoutButton = document.getElementById("logout");
    logoutButton.addEventListener("click", () => {
        // Lấy dữ liệu từ localStorage
        const jsonData = localStorage.getItem("username");

        if (jsonData) {
            // Chuyển đổi JSON thành đối tượng
            const user = JSON.parse(jsonData);
            user.loginStatus = false;
            // Chuyển đổi đối tượng lại thành JSON
            const updatedJson = JSON.stringify(user);
            // Ghi lại vào localStorage
            localStorage.setItem("username", updatedJson);
        } else {
            console.log("No user data found in localStorage.");
        }


        alert("You have logged out successfully!");
        window.location.href = "Home.html"; // Chuyển hướng tới trang Home
    });
});
