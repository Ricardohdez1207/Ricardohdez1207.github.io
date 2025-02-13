const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const response = document.getElementById('response');

document.getElementById("yesBtn").addEventListener("click", function () {
    let response = document.getElementById("response");
    response.innerHTML = "¡Sabía que dirías que sí! 🌻<br>Te ama tu lobo domesticado 🐺❤️";
    response.style.display = "block"; // Mostrar el mensaje

    // Reproducir la canción
    let song = document.getElementById("loveSong");
    song.play();
    
    // Ocultar el botón "Sí" después de hacer clic
    let yesButton = document.getElementById("yesBtn");
    yesButton.style.display = "none"; // Elimina el botón
    // Ocultar el botón "Sí" después de hacer clic
    let noBtn = document.getElementById("noBtn");
    noBtn.style.display = "none"; // Elimina el botón
});

// Acción para el botón "No"
noBtn.addEventListener('mouseover', () => {
    const randomX = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const randomY = Math.random() * (window.innerHeight - noBtn.offsetHeight);

    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
});
