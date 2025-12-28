// Video Scroll Expansion Effect
document.addEventListener('DOMContentLoaded', function() {
    // Select the video container
    const videoContainer = document.querySelector('.small-box');
    const video = document.querySelector('.small-box video');
    
    // Variables to track scroll state
    let lastScrollTop = 0;
    let isVideoExpanded = false;
    let videoAnimationCompleted = false;
    
    // Set a flag after the video animation completes (around 6 seconds after page load)
    setTimeout(() => {
        videoAnimationCompleted = true;
    }, 6000); // 5 seconds video + 1 second for final positioning
    
    // Function to expand video to full screen
    function expandVideo() {
        if (videoContainer && !isVideoExpanded) {
            videoContainer.style.position = 'fixed';
            videoContainer.style.top = '0';
            videoContainer.style.left = '0';
            videoContainer.style.width = '100vw';
            videoContainer.style.height = '100vh';
            videoContainer.style.zIndex = '9999'; // Above the emerald elements
            videoContainer.style.borderRadius = '0';
            isVideoExpanded = true;
        }
    }
    
    // Function to shrink video back to corner
    function shrinkVideo() {
        if (videoContainer && isVideoExpanded && videoAnimationCompleted) {
            videoContainer.style.position = 'absolute';
            videoContainer.style.width = '50vw';
            videoContainer.style.height = '50vh';
            videoContainer.style.top = '0';
            videoContainer.style.left = '50vw';
            isVideoExpanded = false;
        }
    }
    
    // Scroll event listener with gradual expansion effect
    window.addEventListener('scroll', function() {
        if (!videoAnimationCompleted) return; // Don't do anything until video animation completes
        
        const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Determine scroll direction
        const scrollDown = currentScrollTop > lastScrollTop;
        
        if (scrollDown && currentScrollTop > 100) {
            // Gradually expand the video as user scrolls down
            const scrollPercentage = Math.min(currentScrollTop / 500, 1); // Normalize to 0-1 based on first 500px of scroll
            const width = (50 + scrollPercentage * 50) + 'vw'; // From 50vw to 100vw
            const height = (50 + scrollPercentage * 50) + 'vh'; // From 50vh to 100vh
            
            if (videoContainer) {
                videoContainer.style.position = 'fixed';
                videoContainer.style.top = '0';
                videoContainer.style.left = '0';
                videoContainer.style.width = width;
                videoContainer.style.height = height;
                videoContainer.style.zIndex = '9999'; // Above the emerald elements
                isVideoExpanded = true;
            }
        } else if (!scrollDown && currentScrollTop < 100) {
            // When scrolling up near the top, shrink video back to corner
            shrinkVideo();
        }
        
        lastScrollTop = currentScrollTop;
    });
});