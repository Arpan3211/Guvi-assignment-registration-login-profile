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
    $username = $_POST['username'];
    $password = $_POST['password']; 
    $email = $_POST['email'];

    $stmt = $conn->prepare("INSERT INTO register_users (username, password, email) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $username, $password, $email);

    if ($stmt->execute()) {
        echo 'success';
    } else {
        echo 'Registration failed. Try again.';
    }

    $stmt->close();
}

$conn->close();
