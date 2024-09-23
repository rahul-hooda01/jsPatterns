document.addEventListener('DOMContentLoaded', () => {
  const loginBtn = document.getElementById('login-btn');

  loginBtn.addEventListener('click', () => {
    const username = document.getElementById('username').value;
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');
    const password = prompt('Enter your password:'); // Prompt user for password

    if (username === storedUsername && password === storedPassword) {
      // Redirect to dashboard page if credentials are correct
      window.location.href = 'dashboard.html';
    } else {
      alert('Invalid username or password.');
    }
  });
});
