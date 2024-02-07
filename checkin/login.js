// In a real-world scenario, use proper authentication and store passwords securely.
const employeeData = [
    { id: 'D205', password: 'passD205' },
    { id: 'D309', password: 'passD309' }
];

function login() {
    const employeeId = document.getElementById('employeeId').value;
    const password = document.getElementById('password').value;

    const employee = employeeData.find(emp => emp.id === employeeId && emp.password === password);

    if (employee) {
        document.getElementById('timeManagementContainer').style.display = 'block';
    } else {
        alert('Invalid credentials. Please try again.');
    }
}

function checkIn() {
    const currentTime = new Date().getHours();

    if (currentTime < 8 || currentTime >= 8 && currentTime < 8.5) {
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
