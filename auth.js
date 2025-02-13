// Hardcoded users
const users = {
  "admin@gmail.com": { password: "12345678", role: "admin" },
  "user@gmail.com": { password: "87654321", role: "user" }
};

// Login function
function login(event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (users[email] && users[email].password === password) {
    localStorage.setItem("loggedInUser", email);
    localStorage.setItem("userRole", users[email].role);

    if (users[email].role === "admin") {
      window.location.href = "index(A).html"; // Redirect Admins to Admin Dashboard
    } else {
      window.location.href = "index(U).html"; // Redirect Users to User Dashboard
    }
  } else {
    document.getElementById("error-message").innerText = "Invalid email or password.";
  }
}

// Logout function
function logout() {
  localStorage.removeItem("loggedInUser");
  localStorage.removeItem("userRole");
  window.location.href = "index.html"; // Redirect to Public Homepage
}
