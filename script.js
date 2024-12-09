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

const dashboard = document.querySelector('.dashboard');
const signinForm = document.querySelector('.signin .form');
const signupForm = document.querySelector('.signup .form');

let token = null;

signinForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const email = signinForm.querySelector('input[type="text"]').value;
    const password = signinForm.querySelector('input[type="password"]').value;

    const response = await fetch('https://your-render-app-url.com/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
    });

    const result = await response.json();

    if (response.ok) {
        token = result.token;
        document.getElementById('username-display').textContent = email; // Or fetch the username from the token
        dashboard.style.display = 'block';
        signinForm.parentElement.style.display = 'none';
    } else {
        alert(result.message);
    }
});

document.getElementById('logout').addEventListener('click', () => {
    token = null; // Clear token
    dashboard.style.display = 'none';
    signinForm.parentElement.style.display = 'flex'; // Return to sign-in page
});

// Optional: Redirect to dashboard if already logged in
const checkToken = async () => {
    if (token) {
        const response = await fetch('https://your-render-app-url.com/dashboard', {
            headers: { Authorization: `Bearer ${token}` },
        });

        if (response.ok) {
            dashboard.style.display = 'block';
            signinForm.parentElement.style.display = 'none';
        } else {
            token = null; // Token expired or invalid
        }
    }
};

checkToken();

