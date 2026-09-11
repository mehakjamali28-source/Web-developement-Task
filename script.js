const images = document.querySelectorAll(".gallery img");

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

const closeBtn = document.querySelector(".close");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentImages = [];
let currentIndex = 0;


// =========================
// FILTER IMAGES
// =========================

function filterImages(category) {

    images.forEach(function (image) {

        if (category === "all") {

            image.style.display = "block";

        } else {

            if (image.classList.contains(category)) {

                image.style.display = "block";

            } else {

                image.style.display = "none";

            }

        }

    });

}


// =========================
// OPEN LIGHTBOX
// =========================

images.forEach(function (image) {

    image.addEventListener("click", function () {

        currentImages = Array.from(images).filter(function (img) {

            return img.style.display !== "none";

        });

        currentIndex = currentImages.indexOf(image);

        lightbox.style.display = "flex";

        lightboxImg.src = image.src;

    });

});


// =========================
// CLOSE LIGHTBOX
// =========================

closeBtn.addEventListener("click", function () {

    lightbox.style.display = "none";

});


// =========================
// NEXT IMAGE
// =========================

nextBtn.addEventListener("click", function () {

    if (currentImages.length === 0) {
        return;
    }

    currentIndex++;

    if (currentIndex >= currentImages.length) {
        currentIndex = 0;
    }

    lightboxImg.src = currentImages[currentIndex].src;

});


// =========================
// PREVIOUS IMAGE
// =========================

prevBtn.addEventListener("click", function () {

    if (currentImages.length === 0) {
        return;
    }

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = currentImages.length - 1;
    }

    lightboxImg.src = currentImages[currentIndex].src;

});


// =========================
// CLOSE WHEN CLICKING OUTSIDE
// =========================

lightbox.addEventListener("click", function (event) {

    if (event.target === lightbox) {

        lightbox.style.display = "none";

    }

});


// =========================
// KEYBOARD CONTROLS
// =========================

document.addEventListener("keydown", function (event) {

    if (lightbox.style.display !== "flex") {
        return;
    }

    if (event.key === "Escape") {

        lightbox.style.display = "none";

    }

    if (event.key === "ArrowRight") {

        nextBtn.click();

    }

    if (event.key === "ArrowLeft") {

        prevBtn.click();

    }

});
