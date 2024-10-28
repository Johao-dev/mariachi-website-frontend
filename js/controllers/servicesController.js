/*
    MODAL TO CUSTOM PACKAGE
*/
document.addEventListener('DOMContentLoaded', function() {
    fetch('modals/customPackage.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('modal-container').innerHTML = data;
        })
        .catch(err => console.error(err));
});