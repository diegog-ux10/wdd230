document.getElementById('userForm').addEventListener('submit', function (event) {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match. Please try again.');
        document.getElementById('password').value = '';
        document.getElementById('confirmPassword').value = '';
        document.getElementById('password').focus();
        event.preventDefault();
    }
});

document.getElementById('confirmPassword').addEventListener('focusout', function (event) {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword');
    const msgContainer = document.getElementById('formmsg')

    if(password !== confirmPassword.value && password) {
        msgContainer.textContent = "Password do not match!!"
        confirmPassword.style.backgroundColor = "red"
    } else {
        msgContainer.textContent = ''
        confirmPassword.style.backgroundColor = ""
    }
})

document.getElementById('password').addEventListener('focusout', function (event) {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword');
    const msgContainer = document.getElementById('formmsg')

    if(password !== confirmPassword.value && confirmPassword.value) {
        msgContainer.textContent = "Password do not match!!"
        confirmPassword.style.backgroundColor = "red"
    } else {
        msgContainer.textContent = ''
        confirmPassword.style.backgroundColor = ""
    }
})