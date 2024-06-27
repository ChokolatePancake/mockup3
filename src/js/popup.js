let showbtn = document.getElementById("show-popup"); // Button to show the popup
let closebtn = document.getElementById("close-popup"); // Button to close the popup
let sendbtn = document.getElementById("send-button"); // Button to submit the form
let popup = document.querySelector(".popup"); // Popup container
let form = document.querySelector(".popup__form"); // Form within the popup

// Event listener for showing the popup when 'show' button is clicked
showbtn.addEventListener("click", () => popup.classList.add("show"));

// Event listener for closing the popup when 'close' button is clicked
closebtn.addEventListener("click", () => {
    popup.classList.remove("show");
    form.reset(); // Reset the form when closing the popup
});

// Event listener for form submission
sendbtn.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent the default form submission

    let isValid = true; // To know if there any invalid fields

    // Loop through each required field in the form for validation
    form.querySelectorAll('[required]').forEach(field => {
        if (field.value.trim() === '') {
            field.classList.add('highlight-error'); // Add a class to highlight the error
            field.placeholder = 'Необхідно заповнити дане поле'; // Set a placeholder message
            isValid = false; // Set isValid to false if any required field is empty
        } else {
            field.classList.remove('highlight-error'); // Remove the error highlight if the field is filled
        }
    });

    // If the form is valid, log a message, hide the popup, and reset the form
    if (isValid) {
        console.log("Form submitted!");
        popup.classList.remove("show");
        form.reset();
    }
});

// Event listener to remove error highlights when typing in the form fields
form.addEventListener('input', (e) => {
    if (e.target.required) {
        e.target.classList.remove('highlight-error'); // Remove the error highlight when typing
    }
});
