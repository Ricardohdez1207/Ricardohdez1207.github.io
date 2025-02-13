const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const response = document.getElementById('response');

document.getElementById("yesBtn").addEventListener("click", function () {
    let response = document.getElementById("response");
    response.innerHTML = `¡Sabía que dirías que sí! 🌻<br>
                          <img src="nata.jpg" alt="Imagen romántica" style="width: 250px; border-radius: 10px; margin-top: 10px;"><br>
                          Te ama tu lobo domesticado 🐺❤️`;
    response.style.display = "block"; // Mostrar el mensaje

   // Ocultar el título <h1>
   let title = document.getElementById("title");
   if (title) {
       title.style.display = "none"; // Desaparece el h1
   }

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
