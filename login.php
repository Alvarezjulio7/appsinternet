<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Iniciar Sesión</title>
    <link rel="stylesheet" href="styles/style.css">
    <script src="scripts/language.js"></script>
</head>
<body>
    <header>
        <div class="logo">
            <img src="images/logo.png" alt="Logo del curso">
            <h1>EduCom</h1>
        </div>
        <nav>
            <ul>
                <li><a href="index.html">Inicio</a></li>
                <li><a href="register.html">Registrarse</a></li>
                <li><a href="blog.html">Blog</a></li>
                <li><a href="contact.html">Contacto</a></li>
            </ul>
        </nav>
        <select id="languageSelect" onchange="changeLanguage()">
            <option value="es">Español</option>
            <option value="en">English</option>
        </select>
    </header>
    <main>
        <section class="login-section">
            <h2>Iniciar Sesión</h2>
            <form action="login.php" method="post" class="login-form">
                <div class="form-group">
                    <label for="username">Usuario:</label>
                    <input type="text" id="username" name="username" class="inputs" required>
                </div>
                <div class="form-group">
                    <label for="password">Contraseña:</label>
                    <input type="password" id="password" name="password" class="inputs" required>
                </div>
                <button type="submit" value="Iniciar Sesión" class="submit-btn">INICIAR SESION</button>
            </form>

            <div class="login-links">
                <br>
                <a href="register.html">¿No tienes cuenta? Regístrate aquí</a>
                <br>
                <br>
                <a href="recuperar.html">¿Olvidaste tu contraseña? Recupérala aquí</a>
            </div>
        </section>
    </main>
    <script src="scripts/language.js"></script>
</body>
</html>
