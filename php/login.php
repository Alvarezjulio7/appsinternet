<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
 
    $username = $_POST["username"];
    $password = $_POST["password"];

    if ($username == "usuario" && $password == "contraseña") {
       
        header("Location: index.html");
        exit;
    } else {
  
        echo "<script>alert('Usuario o contraseña incorrectos');</script>";
    }
}
?>
