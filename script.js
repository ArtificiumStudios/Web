var images = document.querySelectorAll('.slideshow img');
var currentImage = 0;

function showImage(index) {
  for (var i = 0; i < images.length; i++) {
    images[i].classList.remove('active');
  }
  images[index].classList.add('active');
}

function nextImage() {
  currentImage++;
  if (currentImage >= images.length) {
    currentImage = 0;
  }
  showImage(currentImage);
}

setInterval(nextImage, 5000);