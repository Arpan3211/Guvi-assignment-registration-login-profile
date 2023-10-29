<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "users_registrations_db";

$conn = new mysqli($servername, $username, $password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = $_POST['email'];
    $password = $_POST['password'];

    $stmt = $conn->prepare("SELECT password FROM register_users WHERE email = ?");
    $stmt->bind_param("s", $email);

    if ($stmt->execute()) {
        $stmt->store_result();
        if ($stmt->num_rows == 1) {
            $stmt->bind_result($stored_password);
            $stmt->fetch();
            if ($password === $stored_password) {
                echo $email;
            } else {
                echo 'Login failed. Check your email and password.';
            }
        } else {
            echo 'User not found.';
        }
    } else {
        echo 'Database query failed.';
    }

    $stmt->close();
}

$conn->close();
