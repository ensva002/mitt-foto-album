let currentImageIndex = 0;
const folder = "bilder"
const image = "Landemerker"
const amount = 6;
const imageElement = document.getElementById('carousel-image');

function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % amount;
    imageElement.src = folder+image+[currentImageIndex]+".png";
}

function showPrevImage() {
    currentImageIndex = (currentImageIndex - 1 + amount) % amount;
    imageElement.src = image+[currentImageIndex]+".png";

}

setInterval(showNextImage, 0);
