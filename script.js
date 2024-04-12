document.addEventListener("DOMContentLoaded", function() {
    const thumbnailsContainer = document.getElementById('thumbnails');
    const lightbox = document.querySelector('.lightbox');
    const lightboxContent = document.querySelector('.lightbox-content');

    // Replace 49 with the actual number of images you have
    const totalImages = 49;

    for (let i = 1; i <= totalImages; i++) {
        const img = document.createElement('img');
        img.src = `stiker (${i}).JPG`;
        img.alt = `Sticker ${i}`;
        img.addEventListener('click', function() {
            lightboxContent.src = this.src;
            lightbox.style.display = 'block';
        });
        thumbnailsContainer.appendChild(img);
    }

    const closeButton = document.querySelector('.close');
    closeButton.addEventListener('click', function() {
        lightbox.style.display = 'none';
    });

    lightbox.addEventListener('click', function(event) {
        if (event.target === this) {
            lightbox.style.display = 'none';
        }
    });
});
