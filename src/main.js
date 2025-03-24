import './style.css';

//----------------------------------Section Carousel !!!-----------------------------------
// ciblage de class puis declaration de la variable class carousel container
const carouselContainer = document.querySelector('.carousel-container');

// tableau des images
const images = [
  'assetes/images/burger.jpg',
  'assetes/images/bretzel.jpg',
  'assetes/images/choucroute.jpg',
  'assetes/images/flam.jpg',
];

// Fonction pour la creation du carousel 
function createCarouselRow(images, repeatCount, delay) {
  const carouselTrack = document.createElement('div');
  carouselTrack.classList.add('carousel-track');
  // Declaration de la variable qui genere le nombre de fois que les images seront generés
  let allImages = [];
for (let i = 0; i < repeatCount; i++) {
  allImages = allImages.concat(images);
}
  

  // remplissage du carousel
  allImages.forEach((src) => {
    const img = document.createElement('img');
    img.src = src;
    img.classList.add('carousel-image');
    img.style.marginRight = '10px'; // c'est le gap entre les images
    img.style.width = '8rem'; 
    img.style.height = 'auto'; // auto car elle s'adapte a la valeur de width (si on modifie ca sans ca ne bougera pas)
    img.style.border = 'solid 3px transparent';
    img.style.boxShadow = '3px 3px 3px 3px grey';
    carouselTrack.appendChild(img); //ajoute img dans le carouselTrack
  });

  carouselContainer.appendChild(carouselTrack); //ajoute carouselTrack dans le carouselcontainer

  // fonction pour le mouvement du carousel
  let currentIndex = 0;

  function moveCarousel() {
    currentIndex += 1; 
    const trackWidth = carouselTrack.scrollWidth / allImages.length; 
    carouselTrack.style.transform = `translateX(-${currentIndex * trackWidth}px)`; // animations 

    // permet de reprendre a 0 quand la ligne finie (allImages.length).
    if (currentIndex >= allImages.length) {
      currentIndex = 0;

      // effet du deplacement
      setTimeout(() => {
        carouselTrack.style.transition = 'transform 0.5s ease-in-out';
      }, 50);
    }
  }
      
        
  setInterval(moveCarousel, delay);
}

// appel fonction ligne 16 afin de crée les rows du carousel donc si vous en voulez plus, copie colle.
createCarouselRow(images, 99, 1000); // nombres de copie du tableau et delai du premier carousel
createCarouselRow(images, 99, 2000);// idem mais pour le 2eme

