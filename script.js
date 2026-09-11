* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background: #f4f4f4;
    padding: 30px;
}

h1 {
    text-align: center;
    margin-bottom: 25px;
    color: #222;
}

.filters {
    text-align: center;
    margin-bottom: 30px;
}

.filters button {
    padding: 10px 20px;
    margin: 5px;
    border: none;
    background: #222;
    color: white;
    border-radius: 5px;
    cursor: pointer;
    font-size: 15px;
}

.filters button:hover {
    background: #555;
}


/* GALLERY */

.gallery {
    max-width: 1200px;
    margin: auto;

    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 18px;
}

.gallery img {
    width: 100%;
    height: 220px;

    object-fit: cover;

    border-radius: 10px;

    cursor: pointer;

    transition: transform 0.3s ease,
                box-shadow 0.3s ease;
}

.gallery img:hover {
    transform: scale(1.04);

    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
}


/* LIGHTBOX */

.lightbox {
    display: none;

    position: fixed;

    z-index: 1000;

    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    background: rgba(0, 0, 0, 0.9);

    align-items: center;
    justify-content: center;
}

.lightbox-img {
    max-width: 80%;
    max-height: 80%;

    border-radius: 10px;

    object-fit: contain;
}

.close {
    position: absolute;

    top: 20px;
    right: 35px;

    color: white;

    font-size: 45px;

    cursor: pointer;
}

.prev,
.next {
    position: absolute;

    top: 50%;

    transform: translateY(-50%);

    background: transparent;

    border: none;

    color: white;

    font-size: 50px;

    cursor: pointer;

    padding: 20px;
}

.prev {
    left: 20px;
}

.next {
    right: 20px;
}


/* RESPONSIVE */

@media (max-width: 900px) {

    .gallery {
        grid-template-columns: repeat(3, 1fr);
    }

}

@media (max-width: 600px) {

    body {
        padding: 15px;
    }

    .gallery {
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;
    }

    .gallery img {
        height: 180px;
    }

    .lightbox-img {
        max-width: 90%;
        max-height: 75%;
    }

}
