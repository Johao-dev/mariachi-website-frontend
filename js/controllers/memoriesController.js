/*----  <  IMAGES EVENTLISTENER  >  ----*/
document.addEventListener("DOMContentLoaded", function() {
    const headerPromise = loadComponent('../js/components/header.html', 'header-container');
    const footerPromise = loadComponent('../js/components/footer.html', 'footer-container');
    const mainCarouselPromise = loadComponent('../js/components/mainCarouse.html', 'carousel-container-');
    const navbarMenuPromise = loadComponent('../js/components/navbar-menu.html', 'panel-right-container');
    const navbarPromise = loadComponent('../js/components/navbar.html', 'navbar-container');
  });
  
  function loadComponent(url, containerId) {
    fetch(url)
     .then(response => response.text())
     .then(data => {
        document.getElementById(containerId).innerHTML = data;
      })
     .catch(error => console.error(`Error al cargar el componente ${url}`, error))
  }