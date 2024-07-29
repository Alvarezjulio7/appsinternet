
function changeLanguage() {
    var languageSelect = document.getElementById("languageSelect");
    var selectedLanguage = languageSelect.value;

    switch (selectedLanguage) {
        case "es":
           
            document.title = "Inicio - EduCom";
            document.querySelector("h1").textContent = "EduCom";
            document.querySelector("h2").textContent = "Bienvenido a EduCom";
            document.querySelector("p").textContent = "Explora nuestros cursos y mejora tus habilidades.";
       
            if (window.location.href.indexOf("login.html") > -1) {
                document.title = "Iniciar Sesión - EduCom";
                document.querySelector("h2").textContent = "Iniciar Sesión";
                document.querySelector("form > label[for='lastname']").textContent = "Apellido Paterno:";
                document.querySelector("form > label[for='password']").textContent = "Contraseña:";
                document.querySelector("form > input[type='submit']").value = "Iniciar Sesión";
                document.querySelector("p:nth-of-type(1)").innerHTML = "¿No tienes cuenta? <a href='register.html'>Regístrate aquí</a>";
                document.querySelector("p:nth-of-type(2)").innerHTML = "¿Olvidaste tu contraseña? <a href='forgot_password.html'>Recupérala aquí</a>";
            } else if (window.location.href.indexOf("register.html") > -1) {
                document.title = "Registrarse - EduCom";
                document.querySelector("h2").textContent = "Registrarse";
                document.querySelector("form > label[for='alias']").textContent = "Alias (opcional):";
                document.querySelector("form > label[for='phone']").textContent = "Teléfono:";
                document.querySelector("form > label[for='firstname']").textContent = "Nombre:";
                document.querySelector("form > label[for='lastname']").textContent = "Apellido Paterno:";
                document.querySelector("form > label[for='motherlastname']").textContent = "Apellido Materno:";
                document.querySelector("form > label[for='email']").textContent = "Correo Electrónico:";
                document.querySelector("form > label[for='password']").textContent = "Contraseña:";
                document.querySelector("form > label[for='confirm_password']").textContent = "Confirmar Contraseña:";
                document.querySelector("form > label[for='birthdate']").textContent = "Fecha de Nacimiento:";
                document.querySelector("form > input[type='submit']").value = "Crear Nueva Cuenta";
                document.querySelector("p").innerHTML = "¿Ya tienes una cuenta? <a href='login.html'>Inicia sesión aquí</a>";
            } else if (window.location.href.indexOf("blog.html") > -1) {
                document.title = "Blog - EduCom";
                document.querySelector("h2").textContent = "Blog";
                document.querySelector("p").textContent = "Explora nuestro blog para aprender más.";
             
            } else if (window.location.href.indexOf("contact.html") > -1) {
                document.title = "Contacto - EduCom";
                document.querySelector("h2").textContent = "Contacto";
                document.querySelector("form > label[for='name']").textContent = "Nombre:";
                document.querySelector("form > label[for='email']").textContent = "Correo Electrónico:";
                document.querySelector("form > label[for='message']").textContent = "Mensaje:";
                document.querySelector("form > input[type='submit']").value = "Enviar Mensaje";
            }
            break;
        case "en":
            
            document.title = "Home - EduCom";
            document.querySelector("h1").textContent = "EduCom";
            document.querySelector("h2").textContent = "Welcome to EduCom";
            document.querySelector("p").textContent = "Explore our courses and enhance your skills.";
           
            if (window.location.href.indexOf("login.html") > -1) {
                document.title = "Login - EduCom";
                document.querySelector("h2").textContent = "Login";
                document.querySelector("form > label[for='lastname']").textContent = "Last Name:";
                document.querySelector("form > label[for='password']").textContent = "Password:";
                document.querySelector("form > input[type='submit']").value = "Login";
                document.querySelector("p:nth-of-type(1)").innerHTML = "Don't have an account? <a href='register.html'>Register here</a>";
                document.querySelector("p:nth-of-type(2)").innerHTML = "Forgot your password? <a href='forgot_password.html'>Recover it here</a>";
            } else if (window.location.href.indexOf("register.html") > -1) {
                document.title = "Register - EduCom";
                document.querySelector("h2").textContent = "Register";
                document.querySelector("form > label[for='alias']").textContent = "Alias (optional):";
                document.querySelector("form > label[for='phone']").textContent = "Phone:";
                document.querySelector("form > label[for='firstname']").textContent = "First Name:";
                document.querySelector("form > label[for='lastname']").textContent = "Last Name:";
                document.querySelector("form > label[for='motherlastname']").textContent = "Mother's Last Name:";
                document.querySelector("form > label[for='email']").textContent = "Email:";
                document.querySelector("form > label[for='password']").textContent = "Password:";
                document.querySelector("form > label[for='confirm_password']").textContent = "Confirm Password:";
                document.querySelector("form > label[for='birthdate']").textContent = "Birthdate:";
                document.querySelector("form > input[type='submit']").value = "Create New Account";
                document.querySelector("p").innerHTML = "Already have an account? <a href='login.html'>Log in here</a>";
            } else if (window.location.href.indexOf("blog.html") > -1) {
                document.title = "Blog - EduCom";
                document.querySelector("h2").textContent = "Blog";
                document.querySelector("p").textContent = "Explore our blog to learn more.";
        
            } else if (window.location.href.indexOf("contact.html") > -1) {
                document.title = "Contact - EduCom";
                document.querySelector("h2").textContent = "Contact";
                document.querySelector("form > label[for='name']").textContent = "Name:";
                document.querySelector("form > label[for='email']").textContent = "Email:";
                document.querySelector("form > label[for='message']").textContent = "Message:";
                document.querySelector("form > input[type='submit']").value = "Send Message";
            }
            break;
        default:
            break;
    }
}
