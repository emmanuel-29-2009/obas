// DOM Elements
const loginScreen = document.getElementById('loginScreen');
const signupScreen = document.getElementById('signupScreen');
const dashboard = document.getElementById('dashboard');
const showSignup = document.getElementById('showSignup');
const showLogin = document.getElementById('showLogin');
const logoutBtn = document.getElementById('logoutBtn');
const transferBtn = document.getElementById('transferBtn');
const historyBtn = document.getElementById('historyBtn');
const transferForm = document.getElementById('transferForm');
const transactionHistory = document.getElementById('transactionHistory');
const transactionsList = document.getElementById('transactionsList');

// Sample User Data (for demo)
let currentUser = {
    name: "John Doe",
    balance: 5000,
    transactions: [
        { id: 1, type: "sent", amount: 200, to: "Alice", date: "2023-10-01" },
        { id: 2, type: "received", amount: 500, from: "Bob", date: "2023-10-05" }
    ]
};

// Toggle Screens
showSignup.addEventListener('click', (e) => {
    e.preventDefault();
    loginScreen.style.display = 'none';
    signupScreen.style.display = 'block';
});

showLogin.addEventListener('click', (e) => {
    e.preventDefault();
    signupScreen.style.display = 'none';
    loginScreen.style.display = 'block';
});

// Login Functionality
document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    loginScreen.style.display = 'none';
    dashboard.style.display = 'block';
    document.getElementById('userName').textContent = currentUser.name;
    document.getElementById('userBalance').textContent = `$${currentUser.balance.toFixed(2)}`;
    updateTransactionHistory();
});

// Logout Functionality
logoutBtn.addEventListener('click', () => {
    dashboard.style.display = 'none';
    loginScreen.style.display = 'block';
});

// Toggle Transfer/History
transferBtn.addEventListener('click', () => {
    transactionHistory.style.display = 'none';
    transferForm.style.display = 'block';
});

historyBtn.addEventListener('click', () => {
    transferForm.style.display = 'none';
    transactionHistory.style.display = 'block';
});

// Update Transaction History
function updateTransactionHistory() {
    transactionsList.innerHTML = '';
    currentUser.transactions.forEach(tx => {
        const li = document.createElement('li');
        if (tx.type === "sent") {
            li.innerHTML = `Sent $${tx.amount} to ${tx.to} on ${tx.date}`;
        } else {
            li.innerHTML = `Received $${tx.amount} from ${tx.from} on ${tx.date}`;
        }
        transactionsList.appendChild(li);
    });
}

// Transfer Money (Demo)
document.getElementById('sendMoneyForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const amount = parseFloat(e.target[1].value);
    if (amount > currentUser.balance) {
        alert("Insufficient funds!");
        return;
    }
    currentUser.balance -= amount;
    document.getElementById('userBalance').textContent = `$${currentUser.balance.toFixed(2)}`;
    alert(`Transfer successful! New balance: $${currentUser.balance.toFixed(2)}`);
    e.target.reset();
});