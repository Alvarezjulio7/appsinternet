<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $alias = $_POST["alias"];
    $phone = $_POST["phone"];
    $firstname = $_POST["firstname"];
    $lastname = $_POST["lastname"];
    $motherlastname = $_POST["motherlastname"];
    $email = $_POST["email"];
    $password = $_POST["password"];
    $birthdate = $_POST["birthdate"];

    $servername = "localhost";
    $username = "username";
    $password = "password";
    $dbname = "database";

 
    $conn = new mysqli($servername, $username, $password, $dbname);

    if ($conn->connect_error) {
        die("Conexión fallida: " . $conn->connect_error);
    }

    $sql = "INSERT INTO users (alias, phone, firstname, lastname, motherlastname, email, password, birthdate)
            VALUES ('$alias', '$phone', '$firstname', '$lastname', '$motherlastname', '$email', '$password', '$birthdate')";

    if ($conn->query($sql) === TRUE) {
        echo "<script>alert('Usuario registrado correctamente');</script>";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
}
?>
