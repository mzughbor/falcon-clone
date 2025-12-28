// Video Animation Functionality (without number counter)
document.addEventListener('DOMContentLoaded', function() {
    // Select DOM elements
    const overlay = document.querySelector('.overlay');
    const videoContainer = document.querySelector('.small-box');
    const video = document.querySelector('.small-box video');
    
    // Function to hide loader
    function hideLoader() {
        if (overlay) {
            // Fade out the overlay
            overlay.style.transition = 'opacity 0.8s ease';
            overlay.style.opacity = '0';
            
            // After fade out, hide it completely
            setTimeout(() => {
                overlay.style.display = 'none';
            }, 800);
        }
    }
    
    // Function to animate video
    function animateVideo() {
        if (videoContainer && video) {
            // First make the video full screen
            videoContainer.style.position = 'fixed';
            videoContainer.style.top = '0';
            videoContainer.style.left = '0';
            videoContainer.style.width = '100vw';
            videoContainer.style.height = '100vh';
            videoContainer.style.zIndex = '9999'; // High z-index to be on top
            videoContainer.style.display = 'flex';
            
            // Play the video if it's not already playing
            if (video) {
                video.play().catch(e => console.log("Video play failed:", e));
            }
            
            // After 5 seconds, shrink the video to top right quarter
            setTimeout(() => {
                // Animate to top right quarter
                videoContainer.style.transition = 'all 1s ease-in-out';
                videoContainer.style.width = '50vw';
                videoContainer.style.height = '50vh';
                videoContainer.style.top = '0';
                videoContainer.style.left = '50vw'; // Right side (50vw from left = right half)
                videoContainer.style.borderRadius = '0';
                
                // After animation completes, ensure it stays in position
                setTimeout(() => {
                    videoContainer.style.position = 'absolute'; // Change to absolute to not disrupt document flow
                    
                    // Position the specific emerald element that should sync with video animation
                    const emeraldElement = document.querySelector('.video-sync-emerald');
                    if (emeraldElement) {
                        // Set initial position at bottom-left like the video starts
                        emeraldElement.style.position = 'fixed';
                        emeraldElement.style.bottom = '0';
                        emeraldElement.style.left = '0';
                        emeraldElement.style.width = '100vw';
                        emeraldElement.style.height = '100vh';
                        emeraldElement.style.zIndex = '9997';
                        
                        // Add animation class after a brief moment to allow positioning
                        setTimeout(() => {
                            emeraldElement.classList.add('shrink-animation');
                        }, 50);
                    }
                }, 1000);
            }, 5000); // 5 seconds
        }
    }
    
    // Make the video animation function available globally so it can be called from number-animation.js
    window.startVideoAnimation = animateVideo;
});