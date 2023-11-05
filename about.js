document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("myForm");
    const submitBtn = document.getElementById("submitBtn");
    const modal = document.getElementById("myModal");
    const closeModalBtn = document.getElementById("closeModal");

    function showModal(email, name) {
        modal.style.display = "block";
        document.getElementById("userEmail").textContent = email;
        document.getElementById("userName").textContent = name;
        form.reset();
    }

    function closeModal() {
        modal.style.display = "none";
    }

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const email = document.getElementById("email").value; // Get the entered email
        const name = document.getElementById("name").value; // Get the entered email
        showModal(email, name);
    });

    closeModalBtn.addEventListener("click", closeModal);
});