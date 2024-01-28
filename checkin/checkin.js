// Get current time
const now = new Date();
const hour = now.getHours();
const minute = now.getMinutes();

// Define valid check-in and check-out times
const checkInStart = 8;
const checkInEnd = 8.5;
const checkOutStart = 16;
const checkOutEnd = 17;

// Enable buttons based on time
if (hour >= checkInStart && hour < checkInEnd) {
  document.getElementById("check_in").disabled = false;
} else if (hour >= checkOutStart && hour < checkOutEnd) {
  document.getElementById("check_out").disabled = false;
} else {
  document.getElementById("message").textContent = "Invalid time for check-in or check-out";
}

// Handle form submission
const form = document.querySelector("form");
form.addEventListener("submit", function(event) {
  event.preventDefault();

  // Validate employee ID and password
  const employeeId = document.getElementById("employee_id").value;
  const password = document.getElementById("password").value;

  // Replace these with your actual employee data validation logic
  if (employeeId === "A201" && password === "1234") {
    // Check-in logic
    if (document.getElementById("check_in").disabled === false) {
      // Send check-in request to server (replace with your server-side script)
      document.getElementById("message").textContent = "Checked in successfully!";
    } else {
      document.getElementById("message").textContent = "Check-out only allowed from 4pm to 5pm.";
    }
  } else if (employeeId === "A301" && password === "2341") {
    // Check-in/out logic as above
  } else if (employeeId === "A401" && password === "3214") {
    // Check-
// ... existing code above ...

// Replace these with your actual employee data validation logic
if (employeeId === "A201" && password === "1234") {
    // Check-in logic
    if (document.getElementById("check_in").disabled === false) {
      // Send check-in request to server (replace with your server-side script)
      document.getElementById("message").textContent = "Checked in successfully!";
    } else {
      document.getElementById("message").textContent = "Check-out only allowed from 4pm to 5pm.";
    }
  } else if (employeeId === "A301" && password === "2341") {
    // Check-in/out logic as above
    if (document.getElementById("check_in").disabled === false) {
      // Send check-in request to server
      document.getElementById("message").textContent = "Checked in successfully!";
    } else if (document.getElementById("check_out").disabled === false) {
      // Send check-out request to server
      document.getElementById("message").textContent = "Checked out successfully!";
    } else {
      document.getElementById("message").textContent = "Invalid time for check-in or check-out";
    }
  } else if (employeeId === "A401" && password === "3214") {
    // Check-in/out logic as above
    if (document.getElementById("check_in").disabled === false) {
      // Send check-in request to server
      document.getElementById("message").textContent = "Checked in successfully!";
    } else if (document.getElementById("check_out").disabled === false) {
      // Send check-out request to server
      document.getElementById("message").textContent = "Checked out successfully!";
    } else {
      document.getElementById("message").textContent = "Invalid time for check-in or check-out";
    }
  } else {
    document.getElementById("message").textContent = "Invalid employee ID or password.";
  }
  
  // Reset form after submission
  form.reset();
  }});
  