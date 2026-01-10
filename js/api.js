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

 async function getExpenses () {
    const res = await fetch('./assets/expenses.json');

    if (!res.ok) {
        throw new Error('Failed to load expenses');
    }

    const data = await res.json();
    return data.expenses;
 }
function createExpense (data) {}
function updateExpense (id, data) {}
function deleteExpense (id) {}

export {
    loginRequest,
    getExpenses,
    createExpense,
    updateExpense,
    deleteExpense
}