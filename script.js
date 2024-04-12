document.addEventListener("DOMContentLoaded", function() {
    const thumbnailsContainer = document.querySelector('.thumbnails');
    const lightbox = document.querySelector('.lightbox');
    const lightboxContent = document.querySelector('.lightbox-content');

    const totalImages = 49; // Change this to match the total number of images

    // Generate thumbnails
    for (let i = 1; i <= totalImages; i++) {
        const img = document.createElement('img');
        img.src = `images/stiker (${i}).JPG`;
        img.alt = `Sticker ${i}`;
        img.addEventListener('click', function() {
            lightboxContent.src = this.src;
            lightbox.style.display = 'block';
        });
        thumbnailsContainer.appendChild(img);
    }

    // Close lightbox
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
