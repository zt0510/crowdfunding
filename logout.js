import { logout } from "./firebase-config.js";

document.getElementById("logout").addEventListener("click", function() {
  logout().then(() => {
    window.location.href = "index.html"; // Redirect to homepage after logout
  });
});
