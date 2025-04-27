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

    // Cargar un footer distinto si estamos en la pagina de Diseño y Desarrollo Web
    const currentFile = window.location.pathname.split('/').pop();
    const footerFile = currentFile === 'dydw.html' ? 'footer2.html' : 'footer.html';
    loadContent(footerFile, 'footer');
}); 