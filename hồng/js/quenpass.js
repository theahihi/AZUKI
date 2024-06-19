const form = document.getElementById('forgot-password-form');
const emailOrPhoneInput = document.getElementById('email-or-phone');
const nextButton = document.getElementById('next-button');
const errorMessage = document.getElementById('error-message');

nextButton.addEventListener('click', (e) => {
  e.preventDefault();
  const emailOrPhone = emailOrPhoneInput.value.trim();
  if (emailOrPhone === '') {
    errorMessage.textContent = 'Please enter your email or phone number.';
    return;
  }
  // TO DO: Call API or perform validation here
  // For demo purposes, just alert the input value
  alert(`You entered: ${emailOrPhone}`);
  // Proceed to next step (e.g., send a password reset link or show a new form)
});