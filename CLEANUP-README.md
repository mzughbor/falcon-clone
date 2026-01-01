# Project Cleanup Guide

This document explains how to clean up unused files from the project to prepare for launch.

## Overview

The cleanup script (`cleanup-unused-files.sh`) will:
- Move unused files to a backup directory (with timestamp)
- Keep all files that are actually referenced in HTML/CSS/JS
- Preserve essential files like favicon.ico, logos, and fonts

## Files That Will Be Moved to Backup

### Unused Assets (85 files)
- Duplicate/old image files
- Test images in `assets/test/`
- Unused logo variations
- Old favicon files

### Unused Logo Files
- WhatsApp images
- PDF files
- Old logo variations

### Unused SVG Files
- SVG files in `svgs/` directory (not referenced)

### Unused HTML/JS Files
- `base-service-html-structure.html` (template file)
- `old-clone.html` (old version)
- `styles.css` (unused stylesheet)
- Various unused JS files

## Files That Will Be Kept

### Essential Files
- All HTML pages: `index.html`, `services.html`, `about-us.html`, `contact.html`, `profile.html`
- All CSS files: `css/*.css`
- All referenced assets in `assets/` directory
- All partner logos: `partners-logos/partner-*.png`
- All fonts: `css/fonts/*` (all are referenced)
- Video: `videos/0_4444_Prores_720x720.mp4`
- Favicon: `favicon.ico` (root)
- Logo: `logo/white-logo-v.png` and other referenced logos

## How to Run Cleanup

1. **Review the script** (optional):
   ```bash
   cat cleanup-unused-files.sh
   ```

2. **Run the cleanup script**:
   ```bash
   ./cleanup-unused-files.sh
   ```

3. **Verify the cleanup**:
   - Check that your site still works
   - Review the backup directory: `_backup-unused-YYYYMMDD-HHMMSS/`

4. **If everything is OK, you can delete the backup**:
   ```bash
   rm -rf _backup-unused-*
   ```

## Restore Files (if needed)

If you need to restore any files:
```bash
mv _backup-unused-*/path/to/file ./
```

Or restore everything:
```bash
mv _backup-unused-*/* ./
```

## Files Summary

- **Total files to keep**: ~61 files
- **Total files to backup**: ~85 files
- **Estimated space saved**: ~200+ MB

## Notes

- The script creates a timestamped backup directory
- Empty directories are automatically removed
- The script is safe - it only moves files, doesn't delete them
- Always test your site after cleanup before deleting the backup

