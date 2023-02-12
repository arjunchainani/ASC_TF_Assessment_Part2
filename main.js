const centerImg = document.getElementById('center_img');
const centerDiv = document.getElementById('center');
const images = ['images/brady1.avif', 'images/brady2.jpg', 'images/brady3.webp', 'images/brady4.webp', 'images/brady5.jpeg', 'images/brady6.jpeg']
let imageNum = 0;

function slideshow() {
    setInterval(function() {
        centerImg.src = images[imageNum];
        console.log(centerImg.src);
        imageNum++;
        if (imageNum > 5) {
            imageNum = 0;
        }
    }, 1800);
}

slideshow()