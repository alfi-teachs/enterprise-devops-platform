<<<<<<< HEAD
// ======================================
// Enterprise DevOps Platform
// app.js
// ======================================

// Display Current Date & Time

function updateDateTime() {

    const now = new Date();

    document.getElementById("datetime").innerHTML =
        now.toLocaleString();

}

// Refresh every second

setInterval(updateDateTime, 1000);

updateDateTime();


// Deployment Status

const status = document.getElementById("status");

status.innerHTML = "Running ✅";

status.style.color = "green";


// Environment

const environment = "Development";

console.log("Environment :", environment);


// Application Version

const version = "1.0.0";

console.log("Application Version :", version);


// Page Loaded

console.log("Enterprise DevOps Platform Loaded Successfully");
console.log("Loaded at :", new Date().toLocaleString());
=======
// ======================================
// Enterprise DevOps Platform
// app.js
// ======================================

// Display Current Date & Time

function updateDateTime() {

    const now = new Date();

    document.getElementById("datetime").innerHTML =
        now.toLocaleString();

}

// Refresh every second

setInterval(updateDateTime, 1000);

updateDateTime();


// Deployment Status

const status = document.getElementById("status");

status.innerHTML = "Running ✅";

status.style.color = "green";


// Environment

const environment = "Development";

console.log("Environment :", environment);


// Application Version

const version = "1.0.0";

console.log("Application Version :", version);


// Page Loaded

console.log("Enterprise DevOps Platform Loaded Successfully");
console.log("Loaded at :", new Date().toLocaleString());
