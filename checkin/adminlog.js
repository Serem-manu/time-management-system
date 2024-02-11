

const adminCredentials = { id: 'admin', password: 'admin123' };

function adminLogin() {
    const adminId = document.getElementById('adminId').value;
    const adminPassword = document.getElementById('adminPassword').value;

    if (adminCredentials.id === adminId && adminCredentials.password === adminPassword) {
        window.location.href = 'admin-dashboard.html';
    } else {
        alert('Invalid admin credentials. Please try again.');
    }
}