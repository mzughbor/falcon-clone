# Page Transition Code Documentation

This document shows the JavaScript and CSS code that handles moving between pages.

## JavaScript - Barba.js Page Transitions

### Main Transition Configuration
**Location:** `index.html` lines 1138-1361

```javascript
barba.init({
    preventRunning: true,
    transitions: [
        {
            sync: true,
            from: {
                namespace: ["base"]  // For subpages (services, about-us, contact)
            },
            leave(data) {
                // When leaving a page
                console.log('barba leave')
                $('.load-overlay').addClass("loading")  // Show loading overlay
                $('a').addClass("no-touchy")           // Disable links
                $('.cursor').addClass("loading")       // Show loading cursor
                
                // Animate current page sliding up
                return gsap.fromTo(
                    data.current.container,
                    { y: 0 },
                    {
                        y: -600,                    // Slide up 600px
                        ease: "power3.inOut",
                        duration: 1.5
                    }
                );
            },
            enter(data) {
                // When entering a new page
                console.log('barba enter')
                let transitionData = data;
                $(data.next.container).addClass("fixed");  // Fix new page container
                
                // Animate new page sliding in from bottom
                return gsap.fromTo(
                    data.next.container,
                    { y: 600 },                    // Start 600px below
                    {
                        y: 0,                      // Slide to position 0
                        delay: 0,
                        ease: "power3.inOut",
                        duration: 1.5,
                        onComplete: () => {
                            // After animation completes:
                            $(window).scrollTop(0);
                            
                            setTimeout(function () {
                                $('.cursor').removeClass("loading")
                                $('.cursor').addClass("waiting-state")
                            }, 0)
                            
                            setTimeout(function () {
                                // Remove fixed class after 500ms
                                $(data.next.container).removeClass("fixed");
                                $('.load-overlay').removeClass("loading")
                                $('a').removeClass("no-touchy")
                                $('.cursor').removeClass("waiting-state")
                                $(window).scrollTop(0);
                                
                                // Force reflow to restore sticky positioning
                                if (document.querySelector('.f-header-holder')) {
                                    document.querySelector('.f-header-holder').offsetHeight;
                                }
                            }, 500)

                            // Reset Webflow
                            resetWebflow(transitionData);
                            
                            // Ensure CSS files are loaded
                            ensurePageCSS(transitionData);
                            
                            // Reinitialize page functionality
                            reinitializePage(transitionData);
                        }
                    }
                );
            }
        },
        {
            sync: true,
            from: {
                namespace: ["front"]  // For home page
            },
            // Same structure as above transition
            leave(data) { ... },
            enter(data) { ... }
        }
    ],
    
    views: [
        {
            namespace: "front",  // Home page
            beforeEnter() {
                // Initialize before entering home page
                base.splitting();
                base.beforeEnterRevealMenuItem();
                base.loadVideo();
                base.menuFrontpage();
                base.textInView();
                base.playVid();
                base.nextPrev();
            },
            afterEnter(data) {
                // After entering home page
                base.playVid();
                base.nextPrev();
                ensurePageCSS(data);
                reinitializePage(data);
            }
        },
        {
            namespace: "base",  // Other pages
            beforeEnter() {
                // Initialize before entering subpage
                base.splitting();
                base.beforeEnterRevealMenuItem();
                base.loadVideo();
                base.menuSubpage();
                base.casePageLoad();
                base.textInView();
                base.playVid();
                base.hoverStates();
                base.lazyLoadVid();
            },
            afterEnter(data) {
                // After entering subpage
                base.playVid();
                base.lazyLoadVid();
                base.hoverStates();
                ensurePageCSS(data);
                reinitializePage(data);
            }
        }
    ]
});

// Hooks that run on every page transition
barba.hooks.beforeLeave(() => {
    $("body").css("overflow", "hidden");  // Prevent scrolling during transition
});

barba.hooks.after((data) => {
    $("body").css("overflow", "auto");    // Re-enable scrolling
    base.hoverStates();
    base.lazyLoadVid();
    ensurePageCSS(data);
    reinitializePage(data);
    
    // Force reflow for sticky elements
    setTimeout(function() {
        if (document.querySelector('.f-header-holder')) {
            document.querySelector('.f-header-holder').offsetHeight;
        }
        if (document.querySelector('.f-logo-holder')) {
            document.querySelector('.f-logo-holder').offsetHeight;
        }
    }, 600);
});
```

## Helper Functions

### ensurePageCSS(data)
**Location:** `index.html` lines 1076-1116

Loads page-specific CSS files based on the target URL:
- `/services` → loads `css/services.css`
- `/contact` → loads `css/services.css` and `css/contact.css`
- `/about-us` → no additional CSS

### reinitializePage(data)
**Location:** `index.html` lines 1118-1136

Reinitializes page functionality after transition:
- Splitting.js for text animations
- IntersectionObserver for text in view
- Hover states for interactive elements

### resetWebflow(data)
**Location:** `index.html` lines 1066-1074

Resets Webflow page ID and reinitializes Webflow interactions.

## CSS - Transition Styles

### Load Overlay
**Location:** `css/newbb.shared.mzug.min.css` lines 3715-3730

```css
.load-overlay {
    z-index: 920;
    background-color: #1f1f1f;
    position: fixed;
    inset: 0%;
    /* Hidden by default */
}

.load-overlay.loading {
    transition: transform 1.5s cubic-bezier(.645, .045, .355, 1);
    /* Shows during page transition */
}
```

### Fixed Container During Transition
**Location:** `css/header-styles.css` lines 133-141

```css
.fixed {
    position: fixed !important;
    top: 0;
    left: 0;
    z-index: 102;
    overflow: hidden;
    animation-name: switch;
    animation-duration: 1.15s;
}
```

### No Touchy (Disable Links)
**Location:** `css/header-styles.css` lines 165-167

```css
.no-touchy {
    pointer-events: none !important;
}
```

### Loading Cursor
**Location:** `css/header-styles.css` lines 224-229

```css
.cursor.loading {
    clip-path: circle(70.7% at 50% 50%) !important;
    /* Expands cursor during transition */
}
```

## How It Works

1. **User clicks a link** → Barba.js intercepts the navigation
2. **beforeLeave hook** → Disables scrolling, shows loading overlay
3. **leave transition** → Current page slides up (y: -600px)
4. **enter transition** → New page slides in from bottom (y: 600px → 0)
5. **Container gets .fixed class** → Prevents layout shifts during transition
6. **onComplete callback** → After 500ms, removes .fixed class, enables interactions
7. **after hook** → Reinitializes page functionality, loads CSS, restores sticky elements

## Key Libraries Used

- **Barba.js** (`@barba/core`) - Handles page transitions
- **GSAP** (`gsap.min.js`) - Animates the slide transitions
- **Splitting.js** - Text animation library
- **jQuery** - DOM manipulation

