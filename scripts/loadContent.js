document.addEventListener("DOMContentLoaded", function() {
    function loadContent(url, elementId) {
        fetch(url)
            .then(response => response.text())
            .then(data => {
                document.getElementById(elementId).innerHTML = data;
            })
            .catch(error => console.error('Error loading content:', error));
    }

    loadContent('header.html', 'header');
    loadContent('footer.html', 'footer');

    // Change form validation messages to Spanish
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('invalid', function(event) {
            event.preventDefault();
            const element = event.target;
            if (element.validity.valueMissing) {
                element.setCustomValidity('Por favor, complete este campo.');
            } else if (element.validity.typeMismatch) {
                element.setCustomValidity('Por favor, ingrese un correo electrónico válido.');
            } else {
                element.setCustomValidity('');
            }
        }, true);

        form.addEventListener('input', function(event) {
            event.target.setCustomValidity('');
        });
    }
}); 