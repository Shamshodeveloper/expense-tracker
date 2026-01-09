const API_BASED_URL = 'https://api.example.com/api';

function request (endpoint, options) {

}

async function loginRequest (data) {
    const respone = await fetch(`${API_BASED_URL}/login`, {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(data)
    });

    if (!respone.ok) {
        const error = await respone.json();
        throw new Error(error.message || 'Login failed');
    }

    return respone.json();
}

function registerrequest (data) {}

function getExpenses () {}
function createExpense (data) {}
function updateExpense (id, data) {}
function deleteExpense (id) {}

export {
    loginRequest,
    registerrequest,
    getExpenses,
    createExpense,
    updateExpense,
    deleteExpense
}