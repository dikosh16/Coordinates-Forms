// Виконуємо код після повної загрузки DOM
document.addEventListener("DOMContentLoaded", function () {
    var form = document.forms.form1;

    // Додаємо обробники подій на поля форми
    form.userName.addEventListener("change", nameOnChange);
    form.email.addEventListener("change", emailOnChange);
    form.zip.addEventListener("change", zipcodeOnChange);
    form.addEventListener("submit", onsubmitHandler);
});    

    // Функція для перевірки значення
    function validate(elem, pattern) {
        var res = pattern.test(elem.value);
        elem.className = res ? "valid" : "invalid";
    }

    // Обробник події вводу для поля "Ім'я"
    function nameOnChange() {
        var pattern = /\S/;
        validate(this, pattern);
    }

    // Обробник події вводу для поля "Email"
    function emailOnChange() {
        var pattern = /\b[a-z0-9._]+@[a-z0-9.-]+\.[a-z]{2,4}\b/i;
        validate(this, pattern);
    }

    // Обробник події вводу для поля "Поштовий індекс"
    function zipcodeOnChange() {
        var pattern = /\d{5}/;
        validate(this, pattern);
    }

    // Обробник події відправки форми
    function onsubmitHandler(event) {
        var form = event.target;
        var inputs = form.querySelectorAll("input[type='text']");
        inputs.forEach(input => {
            input.classList.add("valid");
        });

        var invalid = false;
    
        // Перевірка валідності всіх полів
        inputs.forEach(input => {
            input.dispatchEvent(new Event("change"));
            if (input.classList.contains("invalid")) {
                invalid = true;
            }
        });

        // Виведення повідомлення про помилки, якщо такі є
        if (invalid) {
            alert("Допущено помилки при заповненні форми.");
            event.preventDefault();
        }
    }





