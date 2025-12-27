document.addEventListener('DOMContentLoaded', function() {
    const firstCard = document.querySelector('.article-card');
    if (firstCard) {
        const img = document.createElement('img');
        img.alt = "";
        img.loading = "lazy";
        img.decoding = "async";
        img.setAttribute('data-nimg', 'fill');
        img.className = "isParallax object-cover grayscale brightness-110 contrast-125";
        img.style = "position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent;background-size:cover;background-position:50% 50%;background-repeat:no-repeat;background-image:url('api/media/file/test.jpg');";
        img.sizes = "(max-width: 1920px) 3840w, (max-width: 1536px) 3072w, (max-width: 1280px) 2560w, (max-width: 1024px) 2048w, (max-width: 768px) 1536w, (max-width: 640px) 1280w";
        img.srcSet = "";
        img.src = "api/media/file/test.jpg";
        const picture = document.createElement('picture');
        picture.className = "";
        picture.appendChild(img);
        // Find the container div for the image
        const imageContainer = firstCard.querySelector('div > div > div > div > div');
        if (imageContainer) {
            imageContainer.appendChild(picture);
        }
    }
});