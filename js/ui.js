function showLoading() {
    document.querySelector('.loading')?.classList.add('active');
}
function hideLoading() {
    document.querySelector('.loading')?.classList.remove('active');
}

function showError(message) {
    // const errorBox = document.getElementById('authError');
    // if (errorBox) {
    //     errorBox.textContent = message;
    //     errorBox.classList.remove('hidden');
    // }
    const el = document.querySelector('.error');
    if (el) {
        el.textContent = message;
        el.classList.add('active');
    }
}

function renderExpenseList(expenses) {
    const list = document.querySelector('.expense-list');
    if (!list) return;

    list.innerHTML = '';

    expenses.forEach(exp => {
        const li = document.createElement('li');
        li.className = 'expense-item';
        li.innerHTML = `
        <span>${exp.title} (${exp.category})</span>
        <strong>$${exp.amount}</strong>
        <small>${exp.date}</small>
        `;
        list.appendChild(li);
    })
}

function clearExpenseForm() {}

export {
    showLoading,
    hideLoading,
    showError,
    renderExpenseList,
    clearExpenseForm
}