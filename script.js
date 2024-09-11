function validateForm(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get form elements
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var usernameErrorContainer = document.getElementById('username-error');
    var passwordErrorContainer = document.getElementById('password-error');
  
    // Clear previous error messages
    usernameErrorContainer.textContent = '';
    passwordErrorContainer.textContent = '';
  
    // Perform validation logic
    if (username === '') {
      showError('Please enter a username.', usernameErrorContainer);
      return false;
    }
    
    if (password === '') {
      showError('Please enter a password.', passwordErrorContainer);
      return false;
    }
  
    // Validation successful
    window.location.href = '/dashboard/dashboard.html'
  }
  
  function showError(message, container) {
    var errorMessage = document.createElement('p');
    errorMessage.textContent = message;
    container.appendChild(errorMessage);
  }
  