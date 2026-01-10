const DEMO_USER = {
    email: 'demo@expense.com',
    password: '123456',
    token: 'demo-token-123'
};

import { loginRequest } from "./api.js";
import { showError, showLoading, hideLoading } from "./ui.js";

function initAuth() {
    const form = document.getElementById('loginForm');
    if (form) {
        form.addEventListener('submit', handleLogin);
    }
}

 async function handleLogin(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    showLoading();

    try {

        // Demo mode login
        if (email ===DEMO_USER.email && password === DEMO_USER.password) {
            localStorage.setItem('token', DEMO_USER.token);
            window.location.href = 'dashboard.html';
            return;
        }

        throw new Error('Invalid email or password');
        // const result =await loginRequest({email, password});

        // localStorage.setItem('token', result.token);

        // window.location.href = 'dashboard.html';
    } catch (error) {
        showError(error.message);
    } finally {
        hideLoading();
    }
}

function logout() {
    localStorage.removeItem('token');
    window.location.href = 'index.html';
}

export {
    initAuth,
    handleLogin,
    logout
}