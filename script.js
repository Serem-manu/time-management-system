let loggedInEmployee = null;
let isAdminUser = false;

function login() {
  const employeeId = document.getElementById('employeeId').value;
  const password = document.getElementById('password').value;

  if (validateLogin(employeeId, password)) {
    loggedInEmployee = employeeId;
    hideElement('loginPage');
    showElement('employeePanel');
    updateEmployeeName();
    if (isAdmin()) {
      isAdminUser = true;
      showElement('adminPanel');
    }
  } else {
    alert('Invalid login credentials');
  }
}

function validateLogin(employeeId, password) {
  // Simulated validation, replace with server-side logic
  const validCredentials = {
    'A102': 'passwordA102',
    'A304': 'passwordA304',
    'A309': 'passwordA309',
    'admin': 'adminpassword'
  };

  return validCredentials[employeeId] === password;
}

function hideElement(elementId) {
  document.getElementById(elementId).style.display = 'none';
}

function showElement(elementId) {
  document.getElementById(elementId).style.display = 'block';
}

function updateEmployeeName() {
  document.getElementById('employeeName').innerText = loggedInEmployee;
}

function isAdmin() {
  return loggedInEmployee === 'admin';
}

function checkIn() {
  const currentTime = new Date();
  const checkInStartTime = new Date(currentTime.getFullYear(), currentTime.getMonth(), currentTime.getDate(), 8, 0, 0);
  const checkInEndTime = new Date(currentTime.getFullYear(), currentTime.getMonth(), currentTime.getDate(), 8, 30, 0);

  if (isAdminUser || (currentTime >= checkInStartTime && currentTime <= checkInEndTime)) {
    alert('Checked in successfully!');
    enableButton('checkOutBtn');
    disableButton('checkInBtn');
  } else {
    alert('Check-in allowed only between 8:00 AM and 8:30 AM');
  }
}

function checkOut() {
  const currentTime = new Date();
  const checkOutStartTime = new Date(currentTime.getFullYear(), currentTime.getMonth(), currentTime.getDate(), 16, 0, 0);
  const checkOutEndTime = new Date(currentTime.getFullYear(), currentTime.getMonth(), currentTime.getDate(), 17, 0, 0);

  if (isAdminUser || (currentTime >= checkOutStartTime && currentTime <= checkOutEndTime)) {
    alert('Checked out successfully!');
    enableButton('checkInBtn');
    disableButton('checkOutBtn');
  } else {
    alert('Check-out allowed only between 4:00 PM and 5:00 PM');
  }
}

function adminCheck(action) {
  const employeeId = prompt('Enter employee ID:');
  const actionText = action === 'checkIn' ? 'checked in' : 'checked out';

  if (validateAdminAction(employeeId)) {
    alert(`Admin ${actionText} ${employeeId}`);
  } else {
    alert('Invalid employee ID');
  }
}

function validateAdminAction(employeeId) {
  // Simulated validation, replace with server-side logic
  const validAdminIds = ['A102', 'A304', 'A309'];
  return validAdminIds.includes(employeeId);
}

function enableButton(buttonId) {
  document.getElementById(buttonId).disabled = false;
}

function disableButton(buttonId) {
  document.getElementById(buttonId).disabled = true;
}

function showCreateAccount() {
  hideElement('loginPage');
  showElement('create-account-section');
}

function showLogin() {
  hideElement('create-account-section');
  showElement('loginPage');
}

function createAccount() {
  const newEmployeeId = document.getElementById('newEmployeeId').value;
  const newPassword = document.getElementById('newPassword').value;

  // Simulated account creation, replace with server-side logic
  alert(`Account created for Employee ID: ${newEmployeeId}`);
  showLogin();
}
// ... (previous code)

function validateLogin(employeeId, password) {
    // Simulated validation, replace with secure server-side authentication
    const validCredentials = {
      'A102': '2580',
      'A304': '3480',
      'A309': '1234',
      'admin': 'adminpassword'
    };
  
    return validCredentials[employeeId] === password;
  }
  
  // ... (rest of the code)
  