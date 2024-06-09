// focus the cursor on the email-address input
const emailField = document.getElementById("email-address-input");
emailField.focus({
  preventScroll: true,
});


 

    // Select the toggle button and the navigation menu
    const toggleButton = document.querySelector('.header-toggle');
    const navMenu = document.querySelector('.header-list-nav ul');

    // Add click event listener to the toggle button
    toggleButton.addEventListener('click', function() {
        // Toggle the 'show' class on the navigation menu
        navMenu.classList.toggle('show');
    });
