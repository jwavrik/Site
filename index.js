document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    const messageDiv = document.getElementById('message');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        if (username === '' || email === '' || password === '') {
            messageDiv.textContent = 'Todos os campos são obrigatórios!';
            messageDiv.className = 'alert alert-danger';
        } else if (!validateEmail(email)) {
            messageDiv.textContent = 'Email inválido!';
            messageDiv.className = 'alert alert-danger';
        } else {
            messageDiv.textContent = 'Cadastro realizado com sucesso!';
            messageDiv.className = 'alert alert-success';
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});
