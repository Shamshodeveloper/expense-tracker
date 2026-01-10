function formatDate(date) {}

function formatCurrency(amouny) {}

function generateId() {}

function getToken () {
    return localStorage.getItem('token');
}

function isAuthenticated () {
    return !!getToken();
}

export { formatDate, formatCurrency, generateId, isAuthenticated, getToken };