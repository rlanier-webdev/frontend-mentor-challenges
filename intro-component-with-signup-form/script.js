document.getElementById("btn").addEventListener("click", function() {

    firstNameCheck();
    lastNameCheck();
    emailCheck();
    passwordCheck();

});

function firstNameCheck() {
    const first = document.getElementById("first");

    if (first.value.length == 0) {
        first.style.borderColor = "var(--red)";
        document.getElementById("first-error").innerHTML = "First Name cannot be empty";
        document.getElementById("first-icon").style.visibility = "visible";

        event.preventDefault();
    } else {
        first.style.borderColor = "var(--grayish-blue)";
        document.getElementById("first-error").innerHTML = "";
        document.getElementById("first-icon").style.visibility = "hidden";
    }
}

function lastNameCheck() {
    const last = document.getElementById("last");

    if (last.value.length == 0) {
        last.style.borderColor = "var(--red)";
        document.getElementById("last-error").innerHTML = "Last Name cannot be empty";
        document.getElementById("last-icon").style.visibility = "visible";

        event.preventDefault();
    } else {
        last.style.borderColor = "var(--grayish-blue)";
        document.getElementById("last-error").innerHTML = "";
        document.getElementById("last-icon").style.visibility = "hidden";
    }
}

function emailCheck() {
    const email = document.getElementById("email");

    if (email.value.length == 0 || !email.checkValidity()) {
        email.style.borderColor = "var(--red)";
        document.getElementById("email-error").innerHTML = "Looks like this is not an email";
        document.getElementById("email-icon").style.visibility = "visible";

        event.preventDefault();
    } else {
        email.style.borderColor = "var(--grayish-blue)";
        document.getElementById("email-error").innerHTML = "";
        document.getElementById("email-icon").style.visibility = "hidden";
    }
}

function passwordCheck() {
    const password = document.getElementById("password");

    if (password.value.length == 0) {
        password.style.borderColor = "var(--red)";
        document.getElementById("password-error").innerHTML = "Password cannot be empty";
        document.getElementById("password-icon").style.visibility = "visible";

        event.preventDefault();
    } else {
        password.style.borderColor = "var(--grayish-blue)";
        document.getElementById("password-error").innerHTML = "";
        document.getElementById("password-icon").style.visibility = "hidden";
    }
}



