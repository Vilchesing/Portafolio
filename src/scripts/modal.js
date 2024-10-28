document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("proyectModal");
  const modalImg = document.getElementById("img01");
  const closeBtn = document.querySelector(".close");

  // Agregar el evento de clic al contenedor principal
  document.addEventListener("click", (event) => {
    if (event.target.classList.contains("proyect-img")) {
      const src = event.target.src; // Obtiene el src de la imagen clickeada
      modal.style.display = "block";
      modalImg.src = src; // Asigna el src de la imagen clickeada al modal
    }
  });

  // Evento para cerrar el modal
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });
});