import { Fireworks } from 'fireworks-js';

document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('commande-btn');
    const fireworksContainer = document.getElementById('fireworks-container');

    button.addEventListener('click', () => {
        // Afficher le conteneur
        fireworksContainer.style.display = 'block';

        // Configuration des feux d'artifice
        const options = {
            rocketsPoint: { min: 0, max: 100 },
            particles: 150,
            traceLength: 5,
            explosion: 7,
            intensity: 40,
            gravity: 1.5,
            flickering: 60,
            opacity: 0.7
        };

        // Création et lancement des feux d'artifice
        const fireworks = new Fireworks(fireworksContainer, options);
        fireworks.start();

        // Arrêter après 3 secondes et rediriger vers index.html
        setTimeout(() => {
            fireworks.stop();
            fireworksContainer.style.display = 'none';
            window.location.href = 'index.html';
        }, 10000);
    });
});