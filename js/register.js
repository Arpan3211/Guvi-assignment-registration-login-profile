$(document).ready(function () {
    $('#register-form').submit(function (e) {
        e.preventDefault();
        var username = $('#username').val();
        var password = $('#password').val();
        var email = $('#email').val();

        $.ajax({
            type: 'POST',
            url: 'php/register.php',
            data: {
                username: username,
                password: password,
                email: email
            },
            success: function (data) {
                if (data === 'success') {
                    alert('Registration successful. Please log in.');
                    window.location.href = 'login.html';
                } else {
                    alert('Registration failed. Try again.');
                }
            }
        });
    });
});
