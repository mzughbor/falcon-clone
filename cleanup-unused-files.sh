#!/bin/bash
# Cleanup script to remove unused files from the project
# This script moves unused files to a backup directory

set -e

PROJECT_DIR="/home/mahmoud/falcon/www.falconcodes.com"
BACKUP_DIR="${PROJECT_DIR}/_backup-unused-$(date +%Y%m%d-%H%M%S)"

cd "$PROJECT_DIR"

# Create backup directory
mkdir -p "$BACKUP_DIR"

echo "=== Cleaning up unused files ==="
echo "Backup directory: $BACKUP_DIR"
echo ""

# Unused assets files
UNUSED_ASSETS=(
    "assets/0fa3e58d2f4997dcb1af57e6059ac86fd938722a (1)-1200x630.avif"
    "assets/0fa3e58d2f4997dcb1af57e6059ac86fd938722a%20(1).avif"
    "assets/0fa3e58d2f4997dcb1af57e6059ac86fd938722a201c7db.avif"
    "assets/2520.avif"
    "assets/456789+video.avif"
    "assets/Circle20ceiling-130c4.avif"
    "assets/android-chrome-192x192.png"
    "assets/android-chrome-512x512.png"
    "assets/apple-touch-icon.png"
    "assets/f-122x177.png"
    "assets/falcon256hieght.png"
    "assets/favicon-16x16.png"
    "assets/favicon-32x32.png"
    "assets/favicon.ico"
    "assets/imgs/1_BPorHmoclneKDm2g45MFOg.png"
    "assets/imgs/1_zR4lS1veoQUbAVq7kwFMtw.png"
    "assets/imgs/Apollo-12.png"
    "assets/imgs/a35907111367551.60006ba887164.png"
    "assets/imgs/c4650d0769aed92819293af16cd52f16.png"
    "assets/imgs/f62f7467bd6b8c9aa10167cfd0b5cc33.png"
    "assets/imgs/facebook.png"
    "assets/imgs/image.png"
    "assets/imgs/news_preview_mob_image__preview_4064.png"
    "assets/imgs/webp-net-resizeimage.png"
    "assets/kidney20abstract1c0d.avif"
    "assets/kidney_innovation.png"
    "assets/kidney_navigators.webp"
    "assets/logo-.png"
    "assets/main-logo.png"
    "assets/mitchell-luo-istYOcfaY6U-unsplash0a69.jpg"
    "assets/oriento-uWyYD5q3aA0-unsplashbe2f.jpg"
    "assets/placeholder-img.webp"
    "assets/ricardo-gomez-angel-5YM26lUicfU-unsplashf90d.jpg"
    "assets/test.jpg"
    "assets/test/2.jpg"
    "assets/test/Falcon-Code.pdf"
    "assets/test/Untitled20design2017c4e8.avif"
    "assets/test/post 03 copy.jpg"
    "assets/test/post instagram 3 copy.jpg"
    "assets/test/postwib 3 copy.jpg"
    "assets/test/project-01-test.jpg"
    "assets/test/test-big-no-text.jpg"
    "assets/test/test-big.jpg"
    "assets/test/test01.jpg"
    "assets/test/test02.jpg"
    "assets/test/test0202.jpg"
    "assets/to-fav-ico.png"
    "assets/wanted_image-300x200.webp"
    "assets/Blue Green Ink Abstract"
)

# Unused logo files
UNUSED_LOGO=(
    "logo/WhatsApp Image 2025-12-30 at 6.40.10 PM.jpeg"
    "logo/WhatsApp Image 2025-12-30 at 6.40.16 PM.jpeg"
    "logo/WhatsApp Image 2025-12-30 at 7.35.51 PM.jpeg"
    "logo/falcon (1).pdf"
    "logo/falcon.pdf"
    "logo/information technology.pdf"
    "logo/logo-.png"
    "logo/logo-2-.png"
    "logo/of code (1).pdf"
    "logo/of code.pdf"
)

# Unused SVG files
UNUSED_SVGS=(
    "svgs/a.svg"
    "svgs/c.svg"
    "svgs/cc.svg"
    "svgs/d.svg"
    "svgs/e.svg"
    "svgs/f.svg"
    "svgs/l.svg"
    "svgs/n.svg"
    "svgs/o.svg"
    "svgs/s.svg"
)

# Note: All fonts in css/fonts are actually used, so we keep them all
UNUSED_FONTS=()

# Unused HTML/JS files
UNUSED_FILES=(
    "base-service-html-structure.html"
    "old-clone.html"
    "styles.css"
    "content.txt"
    "images.json"
    "app.js"
    "appendImages.js"
    "article-images.js"
    "loader.js"
    "menu.js"
    "number-loader-gsap.js"
    "video-scroll-effect.js"
)

# Function to move file to backup
move_to_backup() {
    local file="$1"
    if [ -f "$file" ] || [ -d "$file" ]; then
        local dir=$(dirname "$file")
        mkdir -p "$BACKUP_DIR/$dir"
        mv "$file" "$BACKUP_DIR/$file"
        echo "  Moved: $file"
        return 0
    else
        echo "  Skipped (not found): $file"
        return 1
    fi
}

# Move unused assets
echo "Moving unused assets..."
for file in "${UNUSED_ASSETS[@]}"; do
    move_to_backup "$file"
done

# Move unused logo files
echo ""
echo "Moving unused logo files..."
for file in "${UNUSED_LOGO[@]}"; do
    move_to_backup "$file"
done

# Move unused SVG files
echo ""
echo "Moving unused SVG files..."
for file in "${UNUSED_SVGS[@]}"; do
    move_to_backup "$file"
done

# Move unused fonts
echo ""
echo "Moving unused fonts..."
for file in "${UNUSED_FONTS[@]}"; do
    move_to_backup "$file"
done

# Move unused HTML/JS files
echo ""
echo "Moving unused HTML/JS files..."
for file in "${UNUSED_FILES[@]}"; do
    move_to_backup "$file"
done

# Remove empty directories
echo ""
echo "Removing empty directories..."
find assets/test -type d -empty -delete 2>/dev/null || true
find assets/imgs -type d -empty -delete 2>/dev/null || true
find svgs -type d -empty -delete 2>/dev/null || true

echo ""
echo "=== Cleanup complete ==="
echo "Backup location: $BACKUP_DIR"
echo ""
echo "To restore files, run:"
echo "  mv $BACKUP_DIR/* ."
echo ""
echo "To permanently delete backup:"
echo "  rm -rf $BACKUP_DIR"

