const employeeData = [
    { id: 'E001', password: 'passE001' },
    { id: 'E002', password: 'passE002' }
];

const adminCredentials = { id: 'admin', password: 'admin123' }; // Add admin credentials
let isLoggedIn = false;

function login() {
    const employeeId = document.getElementById('employeeId').value;
    const password = document.getElementById('password').value;

    const employee = employeeData.find(emp => emp.id === employeeId && emp.password === password);
    const isAdmin = adminCredentials.id === employeeId && adminCredentials.password === password;

    if (employee) {
        isLoggedIn = true;
        redirectToLoggedInPage();
    } else if (isAdmin) {
        alert('Admin login successful!');
    } else {
        alert('Invalid credentials. Please try again.');
    }
}

function redirectToLoggedInPage() {
    const employeeId = document.getElementById('employeeId').value;
    alert("welcome "+ employeeId)
    window.location.href = './checkin/login.html';
    
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
    function redirectToLoggedInPage() {
        document.getElementById('timeManagementContainer').style.display = 'block';
        if (!hasCheckedIn) {
            document.getElementById('checkInBtn').disabled = false;
            document.getElementById('checkOutBtn').disabled = true;
        } else {
            document.getElementById('checkInBtn').disabled = true;
            document.getElementById('checkOutBtn').disabled = false;
        }
    }
    
}
function myFunction() {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
