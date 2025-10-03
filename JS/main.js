document.addEventListener("DOMContentLoaded", function () {
  // Seleccionar todos los videos de fondo
  const videos = document.querySelectorAll(".bg-video");

  videos.forEach(video => {
    const parentSection = video.closest("section");

    // Al pasar el mouse: reproduce
    parentSection.addEventListener("mouseenter", () => {
      video.play();
    });

    // Al salir: pausa y reinicia al inicio
    parentSection.addEventListener("mouseleave", () => {
      video.pause();
      video.currentTime = 0; // vuelve al inicio
    });
  });
});
// Hamburguesa

const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

hamburger.addEventListener('click', () => {
  nav.classList.toggle('active');
});
