window.addEventListener('load', function () {
    // Get a reference to the form
    const form = document.getElementById('myForm');
    const submitBtn = document.getElementById("submitBtn");
    const modal = document.getElementById("myModal");
    const closeModalBtn = document.getElementById("closeModal");

    // Add a submit event listener to the form
    form.addEventListener('submit', function (event) {
        // Prevent the default form submission
        event.preventDefault();

        // Get the input values
        const income = Number(document.getElementById('income').value);
        const rent = Number(document.getElementById('rent').value);
        const bills = Number(document.getElementById('bills').value);
        const loans = Number(document.getElementById('loans').value);
        const groceries = Number(document.getElementById('groceries').value);

        const savings = .1 * income;
        const totalExpenses = rent + bills + loans + groceries;
        const remainingBudget = income - totalExpenses;

        if (remainingBudget > savings) {
            showModal("You are saving more than 10% of your income. Good job! You have $" + remainingBudget + " left for other expenses or savings.");
        } else if (remainingBudget < savings) {
            showModal("Your savings are less than 10% of your income. Consider adjusting your budget.");
        } else {
            showModal("You are saving exactly 10% of your income.");
        }
    });

    function showModal(text) {
        modal.style.display = "block";
        document.getElementById("text").textContent = text;
        form.reset();
    }

    function closeModal() {
        modal.style.display = "none";
    }

    closeModalBtn.addEventListener("click", closeModal);
});