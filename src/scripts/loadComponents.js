function cargarContenido(url, contenedor) {
  return fetch(url)
    .then(response => response.text())
    .then(data => {
      document.getElementById(contenedor).innerHTML += data;
      return Promise.resolve();
    })
    .catch(error => {
      console.error("Error al cargar contenido:", error);
      return Promise.reject(error);
    });
}

cargarContenido('src/components/navbar.html', 'navbar')
  .then(() => cargarContenido('src/components/proyects-section.html', 'main'))
  .then(() => cargarContenido('src/components/about-me-section.html', 'main'))
  .then(()=>cargarContenido('src/components/skills-section.html', 'main'))
  .then(()=>cargarContenido('src/components/footer.html', 'footer'))
  .then(() => {
    console.log("Todos los componentes cargados");
    initModal();
  })
  .catch(error => {
    console.error("Error al cargar los componentes:", error);
  });

// Función para inicializar el modal
function initModal() {
  // Código del modal
  const modal = document.getElementById("proyectModal");
  const modalImg = document.getElementById("img01");
  const closeBtn = document.querySelector(".close");

  // Agregar el evento de clic al contenedor principal
  document.addEventListener("click", (event) => {
    if (event.target.classList.contains("proyect-img")) {
      const src = event.target.src; // Obtiene el src de la imagen clickeada
      modal.style.display = "flex";
      console.log("su")
      modalImg.src = src; // Asigna el src de la imagen clickeada al modal
    }
  });

  // Evento para cerrar el modal
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });
}