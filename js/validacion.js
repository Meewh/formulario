function showAlertSuccess() {
    const alert = document.getElementById("alert-success");
    alert.classList.add("show");
    setTimeout(() => alert.classList.remove("show"), 1250);
}

function showAlertError() {
    const alert = document.getElementById("alert-danger");
    alert.classList.add("show");
    setTimeout(() => alert.classList.remove("show"), 1250);
}

document.getElementById("regBtn").addEventListener("click", function () {
    const campos = [
        document.getElementById("nombre").value.trim(),
        document.getElementById("apellido").value.trim(),
        document.getElementById("email").value.trim(),
        document.getElementById("password1").value,
        document.getElementById("password2").value
    ];

    const password = campos[3];
    const repeatPassword = campos[4];
    const terminos = document.getElementById("terminos").checked;
    const esValido = campos.every(valor => valor !== "") &&
                     password.length >= 6 &&
                     password === repeatPassword &&
                     terminos;

    esValido ? showAlertSuccess() : showAlertError();
});
