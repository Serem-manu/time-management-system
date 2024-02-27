const employeeData = [
    { id: 'E001', name: 'Sam', checkedIn: false, checkInTime: null },
    { id: 'E002', name: 'Dan', checkedIn: false, checkInTime: null },
];

function checkIn() {
    const employeeId = document.getElementById('employeeId').value;
    const employee = findEmployee(employeeId);

    if (employee) {
        if (!employee.checkedIn) {
            employee.checkedIn = true;
            employee.checkInTime = new Date();
            logAction(`${employee.name} (ID: ${employee.id}) checked in at ${getCurrentTime()}.`);
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
            const checkInTime = employee.checkInTime;
            const checkOutTime = new Date();
            const duration = calculateDuration(checkInTime, checkOutTime);
            employee.checkedIn = false;
            employee.checkInTime = null;
            logAction(`${employee.name} (ID: ${employee.id}) checked out at ${getCurrentTime()}. Total duration: ${duration}.`);
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

function getCurrentTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
}

function calculateDuration(startTime, endTime) {
    const duration = endTime.getTime() - startTime.getTime();
    const hours = Math.floor(duration / (1000 * 60 * 60));
    const minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((duration % (1000 * 60)) / 1000);
    return `${hours} hours, ${minutes} minutes, ${seconds} seconds`;
}
function generateUserLogs() {
    const logsList = document.getElementById('logsList');

    employeeData.forEach(employee => {
        logsList.innerHTML += `<li>${employee.name} (${employee.id}) - Checked In: ${employee.checkedIn ? 'Yes' : 'No'}</li>`;
    });
}

// Call the function to generate user logs when the page loads
generateUserLogs();
