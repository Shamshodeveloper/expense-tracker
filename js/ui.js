function showLoading() {
    document.querySelector('.loading')?.classList.add('active');
}
function hideLoading() {
    document.querySelector('.loading')?.classList.remove('active');
}

function showError(message) {
    const errorBox = document.getElementById('authError');
    if (errorBox) {
        errorBox.textContent = message;
        errorBox.classList.remove('hidden');
    }
}

function renderExpenseList(expenses) {}

function clearExpenseForm() {}

export {
    showLoading,
    hideLoading,
    showError,
    renderExpenseList,
    clearExpenseForm
}