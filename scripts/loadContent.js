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
}); 