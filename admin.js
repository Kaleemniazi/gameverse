let users = JSON.parse(localStorage.getItem("gv_users")) || [];
let role = localStorage.getItem("gv_role");

if (role !== "admin") window.location.href = "home.html";

document.getElementById("totalUsers").innerText =
    "👥 Total Users: " + users.length;

// ===== SIMPLE BAR CHART =====
let canvas = document.getElementById("userChart");
let ctx = canvas.getContext("2d");

// Fake data for demo
let labels = ["Mon", "Tue", "Wed", "Thu", "Fri"];
let data = [2, 4, 6, 3, users.length];

let barWidth = 40;
let gap = 30;
let startX = 40;

ctx.fillStyle = "#38bdf8";

data.forEach((value, index) => {
    let barHeight = value * 20;
    let x = startX + index * (barWidth + gap);
    let y = canvas.height - barHeight - 30;

    ctx.fillRect(x, y, barWidth, barHeight);
    ctx.fillText(labels[index], x, canvas.height - 10);
});
