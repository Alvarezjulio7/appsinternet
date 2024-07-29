<?php
require 'config.php';

session_start(); // Inicia la sesión para gestionar el estado de la sesión del usuario

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Consulta para obtener el usuario por su nombre de usuario
    $stmt = $pdo->prepare('SELECT * FROM usuarios WHERE Usuarios = ?');
    $stmt->execute([$username]);
    $user = $stmt->fetch();

    // Verifica si el usuario existe y si la contraseña es correcta
    if ($user && password_verify($password, $user['Contraseñas'])) {
        // Almacena la información del usuario en la sesión
        $_SESSION['user_id'] = $user['ID_usuario'];
        $_SESSION['username'] = $user['Usuarios'];
        
        // Redirecciona al usuario a la página de inicio o panel de control
        header('Location: index.php');
        exit();
    } else {
        $error_message = 'Nombre de usuario o contraseña incorrectos.';
    }
}
?>