function Login() {
    let signup_form = document.getElementById("register");
    let login_form = document.getElementById("log");

    let login_link = document.getElementById('btn1');
    let signup_link = document.getElementById('btn2');

    let indicator = document.getElementById("hr");
    indicator.style.marginLeft = "85px";
    indicator.style.visibility = "visible";

    signup_form.style.display = "none";
    login_form.style.display = "block";

    login_link.style.opacity = "1";
    signup_link.style.opacity = "0.5";
}

function SignUp() {
    let signup_form = document.getElementById("register");
    let login_form = document.getElementById("log");

    let login_link = document.getElementById('btn1');
    let signup_link = document.getElementById('btn2');

    let indicator = document.getElementById("hr");
    indicator.style.marginLeft = "295px";
    indicator.style.visibility = "visible";

    signup_form.style.display = "flex";
    login_form.style.display = "none";

    login_link.style.opacity = "0.5";
    signup_link.style.opacity = "1";
}

function showInLogin() {
    var pwd = document.getElementById("pwd");
    if (pwd.type === "password") {
        pwd.type = "text";
    }
    else {
        pwd.type = "password";
    }
}
function showInSignup() {
    var pwd = document.getElementById("s-pwd");
    if (pwd.type === "password") {
        pwd.type = "text";
    }
    else {
        pwd.type = "password";
    }
}