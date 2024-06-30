// Dark mode toggle functionality
const darkModeToggle = document.querySelector('#dark-mode-toggle');

// Event listener for dark mode toggle button
darkModeToggle.addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
});

// Contact form validation
const contactForm = document.querySelector('#contact-form');
const emailInput = document.querySelector('#email');

// Event listener for form submission
contactForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission
  
  if (!isValidEmail(emailInput.value)) {
    // Alert the user if the email is not valid
    alert('Please enter a valid email address.');
    return;
  }
  
  // Simulate sending email (in a real scenario, you'd handle this server-side)
  alert('Email sent successfully!');
  contactForm.reset(); // Reset the form fields
});

// Function to validate email using a basic regex pattern
function isValidEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}
