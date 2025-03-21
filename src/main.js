import './style.css';

// declaration de la variable class carousel container
const carouselContainer = document.querySelector('.carousel-container');

// tableau des images
const images = [
  'assetes/images/burger.jpg',
  'assetes/images/bretzel.jpg',
  'assetes/images/choucroute.jpg',
  'assetes/images/flam.jpg',
  'assetes/images/burger.jpg',
  'assetes/images/bretzel.jpg',
  'assetes/images/choucroute.jpg',
  'assetes/images/flam.jpg',
  'assetes/images/burger.jpg',
  'assetes/images/bretzel.jpg',
  'assetes/images/choucroute.jpg',
  'assetes/images/flam.jpg',
  'assetes/images/burger.jpg',
  'assetes/images/bretzel.jpg',
  'assetes/images/choucroute.jpg',
  'assetes/images/flam.jpg'
];

// Fonction pour la creation du carousel 
function createCarouselRow(images, delay) {
  const carouselTrack = document.createElement('div');
  carouselTrack.classList.add('carousel-track');

  // Declaration de la variable qui genere le nombre de fois que les images seront generés
  const allImages = [...images, ...images, ...images]; //permet de créer un tableau de 48 images (3x16)

  // remplissage du carousel
  allImages.forEach((src) => {
    const img = document.createElement('img');
    img.src = src;
    img.classList.add('carousel-image');
    carouselTrack.appendChild(img);
  });

  carouselContainer.appendChild(carouselTrack);

  // fonction pour le mouvement du carousel
  let currentIndex = 0;

  function moveCarousel() {
    currentIndex += 1;
    const trackWidth = carouselTrack.scrollWidth / allImages.length;
    carouselTrack.style.transform = `translateX(-${currentIndex * trackWidth}px)`;

    // revient a 0 une fois que le le tableau fini
    if (currentIndex >= allImages.length) {
      currentIndex = 0;

      // effet du deplacement
      setTimeout(() => {
        carouselTrack.style.transition = 'transform 0.5s ease-in-out';
      }, 50);
    }
  }

  // Start auto-scroll with a delay
  setInterval(moveCarousel, delay);
}

//permet d'appeller le setInterval du carousel (1ere valeur renvoi a la ligne 65 (moveCarousel) 
// et la 2eme la valeur du (delai)
createCarouselRow(images, 1000); //delai du premier carousel
createCarouselRow(images, 3000); // delai du 2eme