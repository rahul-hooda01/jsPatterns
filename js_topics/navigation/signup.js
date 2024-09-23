document.addEventListener('DOMContentLoaded', () => {
    const signupBtn = document.getElementById('signup-btn');
  
    signupBtn.addEventListener('click', () => {
      const username = document.getElementById('signup-username').value;
      const password = document.getElementById('signup-password').value;
  
      if (username && password) {
        // Store username and password in localStorage
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
  
        // Redirect to login page
        window.location.href = 'login.html';
      } else {
        alert('Please enter both username and password.');
      }
    });
  });
  