const employeeData = [
    { id: 'E001', name: 'John Doe', checkedIn: false },
    { id: 'E002', name: 'Jane Smith', checkedIn: false },
     { id: 'D205', name: 'Testing', checkedIn: false },
];

function checkIn() {
    const employeeId = document.getElementById('employeeId').value;
    const employee = findEmployee(employeeId);

    if (employee) {
        if (!employee.checkedIn) {
            employee.checkedIn = true;
            logAction(`${employee.name} (ID: ${employee.id}) checked in.`);
        } else {
            logAction(`${employee.name} (ID: ${employee.id}) is already checked in.`);
        }
    } else {
        logAction(`Employee with ID ${employeeId} not found.`);
    }
}

function checkOut() {
    const employeeId = document.getElementById('employeeId').value;
    const employee = findEmployee(employeeId);

    if (employee) {
        if (employee.checkedIn) {
            employee.checkedIn = false;
            logAction(`${employee.name} (ID: ${employee.id}) checked out.`);
        } else {
            logAction(`${employee.name} (ID: ${employee.id}) is not checked in.`);
        }
    } else {
        logAction(`Employee with ID ${employeeId} not found.`);
    }
}

function findEmployee(employeeId) {
    return employeeData.find(emp => emp.id === employeeId);
}

function logAction(message) {
    const logsList = document.getElementById('logsList');
    const logItem = document.createElement('li');
    logItem.textContent = message;
    logsList.appendChild(logItem);
}
