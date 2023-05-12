// Code for validating user inputs
function validate() {
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;

	if (username == "") {
		alert("Please enter a username.");
		return false;
	}

	if (password == "") {
		alert("Please enter a password.");
		return false;
	}
}
// Event listener for form submit
document.getElementById("loginForm").addEventListener("submit", validate);
