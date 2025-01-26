document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('consultationForm');

    form.addEventListener('submit', function (event) {
        // Get the values of the form fields
        const name = document.getElementById('name').value.trim();
        const surname = document.getElementById('surname').value.trim();
        const email = document.getElementById('email').value.trim();
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;

        // Simple validation rules
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  // Basic email pattern
        const namePattern = /^[A-Za-zА-Яа-я\s]+$/;           // Letters and spaces only

        // Check each field for valid input
        if (!name || name.length < 3 || !namePattern.test(name)) {
            alert("Моля, въведете валидно име с поне 3 символа (само букви и интервали).");
            event.preventDefault();
            return;
        }

        if (!surname || surname.length < 3 || !namePattern.test(surname)) {
            alert("Моля, въведете валидна фамилия с поне 3 символа (само букви и интервали).");
            event.preventDefault();
            return;
        }

        if (!email || !emailPattern.test(email)) {
            alert("Моля, въведете валиден имейл адрес.");
            event.preventDefault();
            return;
        }

        if (!date) {
            alert("Моля, въведете дата за консултацията.");
            event.preventDefault();
            return;
        }

        if (!time) {
            alert("Моля, въведете час за консултацията.");
            event.preventDefault();
            return;
        }

        // If all validations pass
        alert("Формата е успешно изпратена!");
    });
});
