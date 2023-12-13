function validateLogin() {
    // Obtiene los valores de usuario y contraseña
    var username = document.getElementById('login-email').value;
    var password = document.getElementById('login-pass').value;

    // Verifica las credenciales (puedes implementar tu lógica de autenticación aquí)
    if (username === 'codo@codo.com.ar' && password === 'admin123') {
        alert('Inicio de sesión exitoso');
        // Redirige a la página deseada
        window.location.href = 'admin.html';
    } else {
        alert('Credenciales incorrectas');
    }
}
