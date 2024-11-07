document.addEventListener("DOMContentLoaded", function() {
  const headerPromise = loadComponent('/js/components/header.html', 'header-container');
  const footerPromise = loadComponent('/js/components/footer.html', 'footer-container');
  const mainCarouselPromise = loadComponent('/js/components/mainCarouse.html', 'carousel-container-');
  const navbarMenuPromise = loadComponent('/js/components/navbar-menu.html', 'panel-right-container');
  const navbarPromise = loadComponent('/js/components/navbar.html', 'navbar-container');

  Promise.all([headerPromise, footerPromise, mainCarouselPromise, navbarMenuPromise, navbarPromise])
   .then(() => {
      initializeSwiper();
    })
   .catch(error => console.error(`Error al cargar los componentes`, error));
});

function loadComponent(url, containerId) {
  fetch(url)
   .then(response => response.text())
   .then(data => {
      document.getElementById(containerId).innerHTML = data;
    })
   .catch(error => console.error(`Error al cargar el componente ${url}`, error))
}

/*
    ----  <  COMMENTS SLIDER  >  ----
*/
function initializeSwiper() {
  new Swiper(".card-wrapper", {
    loop: true,
    spaceBetween: 30,
  
    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dinamicBullets: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  
    // Responsive breakpoints
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
};