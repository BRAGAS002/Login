  document.querySelectorAll('.links a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetForm = link.getAttribute('href').substring(1);
      document.querySelectorAll('.signin, .signup').forEach(section => {
        section.style.display = section.classList.contains(targetForm) ? 'flex' : 'none';
      });
    });
  });

  // Initially show the sign-in form
  document.querySelector('.signin').style.display = 'flex';
  document.querySelector('.signup').style.display = 'none';

  function validatePasswords(event) {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const errorMessage = document.getElementById('error-message');
    const userExistsMessage = document.getElementById('user-exists-message');
    
    // Placeholder: Replace with actual user existence check
    const userAlreadyRegistered = false; // Change this condition based on your logic

    if (userAlreadyRegistered) {
      event.preventDefault();
      userExistsMessage.style.display = 'block';
      errorMessage.style.display = 'none';
    } else if (password !== confirmPassword) {
      event.preventDefault();
      errorMessage.style.display = 'block';
      userExistsMessage.style.display = 'none';
    }
  }

  const signinForm = document.querySelector('.signin .form');
  const signupForm = document.querySelector('.signup .form');
  const dashboard = document.querySelector('.dashboard');
  
  let token = null;
  
  signinForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      const email = signinForm.querySelector('input[type="text"]').value;
      const password = signinForm.querySelector('input[type="password"]').value;
  
      const response = await fetch('https://login-server-1iaj.onrender.com/login', { // Updated URL
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password }),
      });
  
      const result = await response.json();
  
      if (response.ok) {
          token = result.token;
          const decoded = JSON.parse(atob(token.split('.')[1])); // Decode token to get user info
          document.getElementById('username-display').textContent = decoded.username;
          dashboard.style.display = 'block';
          signinForm.parentElement.style.display = 'none';
      } else {
          alert(result.message);
      }
  });
  
  signupForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      const username = signupForm.querySelector('input[type="text"]').value;
      const email = signupForm.querySelector('input[type="email"]').value;
      const password = signupForm.querySelector('input[type="password"]').value;
  
      const response = await fetch('https://login-server-1iaj.onrender.com/signup', { // Updated URL
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username, email, password }),
      });
  
      const result = await response.json();
  
      if (response.ok) {
          alert('Sign up successful! Please log in.');
      } else {
          alert(result.message);
      }
  });
  
  document.getElementById('logout').addEventListener('click', () => {
      token = null; // Clear the token on logout
      dashboard.style.display = 'none';
      signinForm.parentElement.style.display = 'flex'; // Show the login form again
  });
  