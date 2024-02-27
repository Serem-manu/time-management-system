const employeeData = [
    { id: 'E001', name: 'Sam', checkedIn: false, checkInTime: null },
    { id: 'E002', name: 'Dan', checkedIn: false, checkInTime: null },
    // Add more employee data as needed
];

function generateUserLogs() {
    const logsList = document.getElementById('logsList');

    employeeData.forEach(employee => {
        logsList.innerHTML += `<li>${employee.name} (${employee.id}) - Checked In: ${employee.checkedIn ? 'Yes' : 'No'}</li>`;
    });
}

// Call the function to generate user logs when the page loads
generateUserLogs();
