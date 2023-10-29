$(document).ready(function () {
    const urlParams = new URLSearchParams(window.location.search);
    const email = urlParams.get('email');

    if (email) {
        $.ajax({
            type: 'GET',
            url: 'mongodb-query.js', 
            data: { email: email },
            success: function (data) {
              
                const userData = JSON.parse(data);

                $('#username').text(userData.username);
                $('#age').text(userData.age);
                $('#dob').text(userData.dob);
                $('#contact').text(userData.contact);
                $('#email').text(userData.email);
            },
            error: function () {
                console.log('Error fetching user data.');
            }
        });
    } else {
        console.log('Email not found in the URL.');
    }

    $('#update-profile').click(function () {
        window.location.href = 'update_profile.html';
    });
});
