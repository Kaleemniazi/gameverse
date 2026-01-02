let chat = document.getElementById("chat");
let user = localStorage.getItem("gv_user") || "Guest";

function send() {
    let msg = document.getElementById("msg").value;
    if (msg === "") return;

    let messages = JSON.parse(localStorage.getItem("gv_chat")) || [];
    messages.push(user + ": " + msg);

    localStorage.setItem("gv_chat", JSON.stringify(messages));
    loadChat();
    document.getElementById("msg").value = "";
}

function loadChat() {
    chat.innerHTML = "";
    let messages = JSON.parse(localStorage.getItem("gv_chat")) || [];
    messages.forEach(m => {
        chat.innerHTML += `<p>${m}</p>`;
    });
}

loadChat();
