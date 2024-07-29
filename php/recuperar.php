<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $telefono = $_POST['telefono'];

  
    $conn = new mysqli("localhost", "usuario", "contraseña", "base_de_datos");

    if ($conn->connect_error) {
        die("Conexión fallida: " . $conn->connect_error);
    }

    if (!empty($email)) {
        $sql = "SELECT * FROM usuarios WHERE email='$email'";
    } else if (!empty($telefono)) {
        $sql = "SELECT * FROM usuarios WHERE telefono='$telefono'";
    } else {
        echo "Por favor, proporcione un correo electrónico o número de celular.";
        exit;
    }

    $result = $conn->query($sql);

    if ($result->num_rows > 0) {

        echo "Se ha enviado un enlace de recuperación de contraseña.";
    } else {
        echo "No se encontró una cuenta con el correo electrónico o número de celular proporcionado.";
    }

    $conn->close();
}
?>
