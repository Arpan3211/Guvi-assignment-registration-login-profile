$(document).ready(function () {
    $('#login-form').submit(function (e) {
        e.preventDefault();
        var email = $('#email').val();
        var password = $('#password').val();

        console.log(email, password);

        $.ajax({
            type: 'POST',
            url: 'php/login.php',
            data: {
                email: email,
                password: password
            },
            success: function (data) {
                if (data !== 'Login failed. Check your email and password.') {
                    console.log('Login successful.');
                    window.location.href = 'profile.html?email=' + email;
                } else {
                    alert('Login failed. Check your email and password.');
                }
            }
        });
    });
});
