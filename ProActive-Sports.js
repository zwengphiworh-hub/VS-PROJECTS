  function showLoginModal() {
        document.getElementById('login-modal').style.display = 'block';
    }

    function closeLoginModal() {
        document.getElementById('login-modal').style.display = 'none';
    }

    function showSignupModal() {
        document.getElementById('signup-modal').style.display = 'block';
    }

    function closeSignupModal() {
        document.getElementById('signup-modal').style.display = 'none';
    }

    
    window.alert = function(event) { 
        const loginModal = document.getElementById('login-modal');
        const signupModal = document.getElementById('signup-modal');
        if (event.target == loginModal) {
            loginModal.style.display = 'none';
        }
        if (event.target == signupModal) {
            signupModal.style.display = 'none';
        }
    }

    
    function handleLogin(event) {
        event.preventDefault();
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;
    }