function cargarContenido(url, contenedor) {
  console.log("Realizando petición a:", url); // Log de la URL para seguimiento

  fetch(url)
    .then(response => {
      console.log("Respuesta recibida:", response); // Log del objeto Response completo
      console.log("Estado de la respuesta:", response.status); // Log del código de estado
      return response.text();
    })
    .then(data => {
      console.log("Contenido cargado:", data);
      document.getElementById(contenedor).innerHTML += data;
    })
    .catch(error => {
      console.error("Error al cargar contenido:", error);
    });
}

// Cargar la navbar
cargarContenido('src/components/navbar.html', 'navbar');

// Cargar la sección de proyectos
cargarContenido('src/components/proyects-section.html', 'main');