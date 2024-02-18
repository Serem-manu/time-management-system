const employeeData = [
    { id: 'D205', password: 'passD205' },
    { id: 'D309', password: 'passD309' }
];

const adminCredentials = { id: 'admin', password: 'admin123' };
let isLoggedIn = false;

function login() {
    const employeeId = document.getElementById('employeeId').value;
    const password = document.getElementById('password').value;

    const employee = employeeData.find(emp => emp.id === employeeId && emp.password === password);
    const isAdmin = adminCredentials.id === employeeId && adminCredentials.password === password;

    if (employee) {
        isLoggedIn = true;
        updateVisibility();
    } else if (isAdmin) {
        alert('Admin login successful!');
    } else {
        alert('Invalid credentials. Please try again.');
    }
}

function logout() {
    isLoggedIn = false;
    updateVisibility();
}

function updateVisibility() {
    const loginContainer = document.getElementById('loginContainer');
    const timeManagementContainer = document.getElementById('timeManagementContainer');

    if (isLoggedIn) {
        loginContainer.style.display = 'none';
        timeManagementContainer.style.display = 'block';
    } else {
        loginContainer.style.display = 'block';
        timeManagementContainer.style.display = 'none';
    }
}

function checkIn() {
    const currentTime = new Date().getHours();

    if (currentTime < 8 || (currentTime >= 8 && currentTime < 8.5)) {
        alert('Check-In successful!');
    } else {
        alert('Check-In not allowed at this time.');
    }
}

function checkOut() {
    const currentTime = new Date().getHours();

    if (currentTime >= 16) {
        alert('Check-Out successful!');
    } else {
        alert('Check-Out not allowed at this time.');
    }
}
