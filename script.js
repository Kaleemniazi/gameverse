let users = JSON.parse(localStorage.getItem("gv_users")) || [];

function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (user === "" || pass === "") return alert("Fill all fields");

    users.push(user);
    localStorage.setItem("gv_users", JSON.stringify(users));

    localStorage.setItem("gv_user", user);
    localStorage.setItem("gv_role", user === "admin" ? "admin" : "user");

    window.location.href = user === "admin" ? "admin.html" : "home.html";
}


