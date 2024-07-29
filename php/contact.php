<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $file = 'messages.txt';
    $current = file_get_contents($file);
    $current .= "Name: $name\nEmail: $email\nMessage: $message\n\n";
    file_put_contents($file, $current);

    echo "<script>alert('Mensaje enviado correctamente');</script>";
}
?>
