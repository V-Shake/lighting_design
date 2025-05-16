document.addEventListener('DOMContentLoaded', function() {
    // Find all gallery containers
    const galleryContainers = document.querySelectorAll('.gallery-container');
    
    galleryContainers.forEach(container => {
        const mainImage = container.querySelector('.main-image img');
        const thumbnails = Array.from(container.querySelectorAll('.thumbnails img'));
        let currentIndex = 0;
        let autoplayInterval;
        
        // Skip if gallery structure is incomplete
        if (!mainImage || thumbnails.length === 0) {
            return;
        }
        
        // Function to update the main image
        function updateMainImage(index) {
            currentIndex = index;
            
            // Update main image src
            mainImage.src = thumbnails[index].src;
            mainImage.alt = thumbnails[index].alt;
            
            // Update active thumbnail
            thumbnails.forEach(thumb => thumb.classList.remove('active'));
            thumbnails[index].classList.add('active');
        }
        
        // Set up thumbnail click events
        thumbnails.forEach((thumbnail, index) => {
            thumbnail.addEventListener('click', () => {
                updateMainImage(index);
                // Reset autoplay timer when manually changing image
                clearInterval(autoplayInterval);
                startAutoplay();
            });
        });
        
        // Set up autoplay
        function startAutoplay() {
            autoplayInterval = setInterval(() => {
                const nextIndex = (currentIndex + 1) % thumbnails.length;
                updateMainImage(nextIndex);
            }, 4000); // Change image every 4 seconds
        }
        
        // Initialize with first image and start autoplay
        updateMainImage(0);
        startAutoplay();
    });
});