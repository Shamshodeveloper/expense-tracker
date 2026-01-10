import { getExpenses } from './api.js';
import { showLoading, hideLoading, showError, renderExpenseList } from './ui.js';

async function loadExpenses() {
    showLoading();
    try {
        const expenses = await getExpenses();
        renderExpenseList(expenses);
    }catch (err) {
        showError(err.message);
    } finally {
        hideLoading();
    }
}

function initExpenses () {
    loadExpenses();
}
function addExpense(data) {}

function editExpense(id, data) {}

function removeExpense(id) {}

export {
    initExpenses,
    loadExpenses,
    addExpense,
    editExpense,
    removeExpense
}