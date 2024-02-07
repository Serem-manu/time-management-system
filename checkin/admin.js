function getCurrentTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    return hours * 60 + minutes;
}

function checkInEmployees() {
    const currentTime = getCurrentTime();
    if (currentTime <= 510) { // 8:30 am (8 * 60 + 30)
        alert("Employees checked in successfully!");
    } else {
        alert("Check-in time has passed.");
    }
}

function checkOutEmployees() {
    const currentTime = getCurrentTime();
    if (currentTime >= 960) { // 4:00 pm (16 * 60)
        alert("Employees checked out successfully!");
    } else {
        alert("Check-out time has not arrived.");
    }
}