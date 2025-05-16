document.addEventListener('DOMContentLoaded', function() {
    const toggles = document.querySelectorAll('.toggle');
    const videoContainers = document.querySelectorAll('.video-container');
    const imageContainers = document.querySelectorAll('.image-container');

    toggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const target = this.dataset.target;

            videoContainers.forEach(container => {
                if (container.id === target) {
                    container.classList.toggle('active');
                } else {
                    container.classList.remove('active');
                }
            });

            imageContainers.forEach(container => {
                if (container.id === target) {
                    container.classList.toggle('active');
                } else {
                    container.classList.remove('active');
                }
            });
        });
    });

    // Function to show selected section and hide others
    window.showSection = function(sectionId) {
        // Hide all sections
        const sections = document.querySelectorAll('.section');
        sections.forEach(section => {
            section.style.display = 'none';
        });
        
        // Show the selected section
        const selectedSection = document.getElementById(sectionId);
        if (selectedSection) {
            selectedSection.style.display = 'block';
        }
        
        // Update active button state
        const buttons = document.querySelectorAll('.toggle-buttons button');
        buttons.forEach(button => {
            // Check if this button's onclick references the current sectionId
            if (button.getAttribute('onclick').includes(`'${sectionId}'`)) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
    };
    
    // Show brazier-demo by default when page loads
    showSection('brazier-demo');
});