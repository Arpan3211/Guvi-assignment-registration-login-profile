<!DOCTYPE html>
<html>

<head>
    <title>User Profile</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    <link rel="stylesheet" href="assets/css/style.css">
</head>

<body>
    <div class="container">
        <h1>User Profile</h1>
        <div id="profile-data">
            <p><strong>Username:</strong> <span id="username"></span></p>
            <p><strong>Age:</strong> <span id="age"></span></p>
            <p><strong>Date of Birth:</strong> <span id="dob"></span></p>
            <p><strong>Contact:</strong> <span id="contact"></span></p>
            <p><strong>Email:</strong> <span id="email"></span></p>
        </div>
        <button id="update-profile" class="btn btn-primary">Update Profile</button>
    </div>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="assets/js/profile.js"></script>
</body>

</html>