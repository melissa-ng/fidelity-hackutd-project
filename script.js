// Get the form and submit button
const form = document.getElementById("myForm");
const submitBtn = document.getElementById("submitBtn");

// Get the modal and the close button
const modal = document.getElementById("myModal");
const closeModalBtn = document.getElementById("closeModal");

// Function to show the modal and clear form inputs
function showModal() {
    modal.style.display = "block";
    form.reset(); // Clear form inputs
}

// Function to close the modal
function closeModal() {
    modal.style.display = "none";
}

// Event listener for form submission
form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the default form submission
    showModal(); // Show the modal
});

// Event listener for closing the modal
closeModalBtn.addEventListener("click", closeModal);