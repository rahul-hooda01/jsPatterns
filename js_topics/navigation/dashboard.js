document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const logoutBtn = document.getElementById('logout-btn');
  
    darkModeToggle.addEventListener('click', () => {
      const isDarkMode = document.body.classList.contains('dark-mode');
      if (isDarkMode) {
        document.body.classList.remove('dark-mode');
        darkModeToggle.classList.remove('light-mode');
        darkModeToggle.textContent = 'Dark Mode';
      } else {
        document.body.classList.add('dark-mode');
        darkModeToggle.classList.add('light-mode');
        darkModeToggle.textContent = 'Light Mode';
      }
    });
  
    logoutBtn.addEventListener('click', () => {
      // Clear localStorage and redirect to login page
      localStorage.removeItem('username');
      localStorage.removeItem('password');
      window.location.href = 'login.html';
    });
  });
  