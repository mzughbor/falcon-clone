// article-images.js
// JavaScript file to load article images and data from JSON file and inject HTML directly

document.addEventListener('DOMContentLoaded', function() {
    // Function to fetch and load article data from JSON
    async function loadArticleData() {
        try {
            const response = await fetch('images.json');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const articles = await response.json();
            populateArticleCards(articles);
        } catch (error) {
            console.error('Error loading article data:', error);
            // Fallback: use default content if JSON fails to load
            populateArticleCards(getDefaultArticles());
        }
    }

    // Function to populate the article cards with data
    function populateArticleCards(articles) {
        // Get all the article card containers
        const articleCards = document.querySelectorAll('.article-card');
        
        // Loop through each article and populate the corresponding card
        articles.forEach((article, index) => {
            if (index < articleCards.length) {
                const card = articleCards[index];
                
                // Update the background color
                const contentDiv = card.querySelector('.size-full');
                if (contentDiv) {
                    contentDiv.style.backgroundColor = article.color;
                }
                
                // Update the image
                const img = card.querySelector('img');
                if (img) {
                    img.src = article.image;
                    img.alt = article.title + ' Image';
                    img.setAttribute('srcSet', '');
                    // Update background image style as well for the picture element
                    const pictureDiv = card.querySelector('div');
                    if (pictureDiv && pictureDiv.style) {
                        pictureDiv.style.backgroundImage = `url('${article.image}')`;
                    }
                }
                
                // Update the title
                const titleElement = card.querySelector('p.font-gothic.text-xl');
                if (titleElement) {
                    titleElement.textContent = article.title;
                }
                
                // Update the description
                const descElement = card.querySelector('p.font-sans');
                if (descElement) {
                    descElement.textContent = article.description;
                }
                
                // Update the date
                const dateElement = card.querySelector('div.font-gothic span');
                if (dateElement) {
                    dateElement.textContent = article.date;
                }
                
                // Update the read more link
                const readMoreLink = card.querySelector('a[rel="noopener noreferrer"]');
                if (readMoreLink) {
                    readMoreLink.href = article.readMoreUrl;
                }
                
                // Update the text color based on background
                const textElements = card.querySelectorAll('.text-zinc-950, .text-zinc-50, .text-neutral-200');
                textElements.forEach(el => {
                    if (article.color === '#FFFFFF' || article.color === '#0A0A0A') {
                        el.classList.remove('text-zinc-50', 'text-neutral-200');
                        el.classList.add(article.color === '#FFFFFF' ? 'text-zinc-950' : 'text-zinc-50');
                    }
                });
                
                // Update the background color for the text container
                const textContainer = card.querySelector('.relative.flex.flex-col.flex-1');
                if (textContainer) {
                    textContainer.style.backgroundColor = article.color;
                }
            }
        });
    }

    // Default articles in case JSON fails to load
    function getDefaultArticles() {
        return [
            {
                id: 1,
                title: "Website development",
                description: "Websites that make a good impression and deliver results, that's what we provide well-designed and professional websites for businesses, designed to achieve your business goals clearly and precisely.",
                image: "/api/media/file/kidney_innovation.png",
                date: "June 29",
                color: "#14A586",
                readMoreUrl: "/articles/web-development"
            },
            {
                id: 2,
                title: "Developing smartphone applications",
                description: "We focus on ease of use, and we bring your idea to life by delivering it to your customers daily. We design and develop smart applications for iOS and Android systems, with stability and scalability.",
                image: "",
                date: "May 05",
                color: "#0A0A0A",
                readMoreUrl: "/articles/mobile-app-development"
            },
            {
                id: 3,
                title: "Technical Consulting and Digital Compliance",
                description: "We offer consultations to help you make sound technical decisions that comply with regulatory requirements.",
                image: "",
                date: "August 17",
                color: "#FFFFFF",
                readMoreUrl: "/articles/technical-consulting"
            },
            {
                id: 4,
                title: "...",
                description: "...",
                image: "/api/media/file/kidney_capital.avif",
                date: "January 03",
                color: "#FFB8E0",
                readMoreUrl: "/articles/technical-consulting"
            }
        ];
    }

    // Wait a bit for the page to fully load, then inject the content
    window.addEventListener('load', function() {
        setTimeout(loadArticleData, 100);
    });
});