document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch('users.json')
        .then(response => response.json())
        .then(users => {
            const user = users.find(user => user.username === username && user.password === password);
            if (user) {
                alert('Успешный вход!');
                window.location.href = 'index.html';
            } else {
                document.getElementById('error').textContent = 'Неверное имя пользователя или пароль';
            }
        })
        .catch(error => {
            console.error('Ошибка загрузки пользователей:', error);
        });
});