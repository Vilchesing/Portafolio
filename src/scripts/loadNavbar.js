function loadNavbar() {
  fetch('src/components/navbar.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('navbar').innerHTML = data;
    })
    .catch(error => {
      console.error('Error al cargar navbar.html:', error);
    });
}

// Llama a la función cuando se carga la página
window.onload = loadNavbar;