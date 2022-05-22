const validator = require("validator");

function validateSignUp(data) {
  const { email, password, passwordc, username } = data;
  const errors = {
    email: "",
    password: "",
    passwordc: "",
    username: "",
  };
  // Email input validation
  if (email === "" || email === null || email === undefined) {
    errors.email = "The email address is required";
  } else if (!validator.isEmail(email)) {
    errors.email = "The email address is invalid";
  }
  // User name input validation
  if (username === "" || username === null || username === undefined) {
    errors.username = "The username is required";
  } else if (!validator.isAlphanumeric(username)) {
    errors.username = "The username must contain only letters and numbers";
  }
  // Password input validation
  if (password === "" || password === null || password === undefined) {
    errors.password = "The password is required";
  } else if (password.length < 8) {
    errors.password = "The minimum length is 8 characters";
  }
  if (passwordc === "" || passwordc === null || passwordc === undefined) {
    errors.passwordc = "The password confirmation is required";
  } else if (!validator.equals(password, passwordc)) {
    errors.passwordc = "The password confirmation doesn't match";
  }
  const errorsString =
    errors.email + errors.password + errors.username + errors.passwordc;
  return { isValid: errorsString === "" ? true : false, errors };
}

module.exports = { validateSignUp };
