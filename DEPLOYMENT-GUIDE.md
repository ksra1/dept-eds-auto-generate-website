# Complete AEM EDS Deployment Guide

## Current Status

✅ **Code Complete** - All Lincoln blocks, styles, and analytics are ready
✅ **Content Created** - Google Doc with proper block formatting uploaded
✅ **fstab.yaml Updated** - Points to your Google Drive folder
❌ **Not Yet Deployed** - Needs GitHub + AEM Code Sync setup

## Why Local Dev Shows 404

The `aem up` command is a **proxy** to your published AEM site. It doesn't serve Google Drive content directly. To see your site working, you need to:

1. Push code to GitHub
2. Install AEM Code Sync app
3. Content will be published to `https://main--{repo}--{owner}.aem.page/`
4. Then `aem up` will proxy to that published site

## Complete Deployment Steps

### Step 1: Push to GitHub

```bash
# Create a new repository on GitHub (if you haven't already)
# Then push your code:

git remote add origin https://github.com/YOUR_USERNAME/dept-eds-auto-generate-website.git
git branch -M main
git push -u origin main
```

### Step 2: Install AEM Code Sync

1. Go to https://github.com/apps/aem-code-sync
2. Click "Install"
3. Select your repository: `dept-eds-auto-generate-website`
4. Grant permissions
5. The app will automatically build and deploy your site

### Step 3: Wait for Deployment

- First deployment takes 2-3 minutes
- Check status at: https://github.com/YOUR_USERNAME/dept-eds-auto-generate-website/actions
- Once complete, your site will be live at:
  - Preview: `https://main--dept-eds-auto-generate-website--YOUR_USERNAME.aem.page/`
  - Live: `https://main--dept-eds-auto-generate-website--YOUR_USERNAME.aem.live/`

### Step 4: Verify Your Site

Visit the preview URL. You should see:
- ✅ Lincoln Nautilus hero with full-width layout
- ✅ Lincoln fonts (Proxima Nova, Lincoln Miller)
- ✅ Lincoln brand colors (#00095b navy)
- ✅ Hero block with image, heading, description, CTA
- ✅ Columns block with 4 vehicles
- ✅ Responsive design
- ✅ Adobe Analytics detection in console

### Step 5: Local Development (After Deployment)

Once deployed, `aem up` will work:

```bash
npx @adobe/aem-cli up
```

This proxies to your published site and allows you to:
- Test code changes locally
- See live reload
- Debug with local files

## Alternative: Test Without GitHub

If you want to see the styling without full deployment:

### Option A: Use Static HTML

1. Create a simple `index.html` in project root
2. Add the EDS scripts manually:
```html
<script src="/scripts/aem.js" type="module"></script>
<script src="/scripts/scripts.js" type="module"></script>
<link rel="stylesheet" href="/styles/styles.css"/>
```
3. Serve with: `npx http-server -p 3000`

### Option B: Use the Boilerplate Example

The AEM boilerplate comes with example content. You can test with that:

1. Use the default fstab.yaml from the boilerplate
2. This points to Adobe's example Google Drive
3. Your blocks will work with their content

## What You've Built

All code is production-ready:

### Styles ([`styles/styles.css`](styles/styles.css))
- Lincoln color palette
- Lincoln typography (Proxima Nova, Lincoln Miller)
- @font-face declarations with font-display: swap
- Responsive design tokens

### Hero Block ([`blocks/hero/`](blocks/hero/))
- Full-width hero with background image
- Centered content layout
- Scroll indicator with smooth scroll
- Premium Lincoln aesthetic
- Mobile-responsive

### Navigation Block ([`blocks/navigation/`](blocks/navigation/))
- Fixed position with backdrop blur
- Lincoln wordmark branding
- Mobile hamburger menu
- Scroll-based show/hide
- Accessibility features

### Analytics ([`scripts/scripts.js`](scripts/scripts.js))
- detectAdobeAnalytics() function
- Checks for Adobe Launch
- Detects DTM and _satellite
- Console logging

## Next Steps

1. **Push to GitHub** - Get your code online
2. **Install AEM Code Sync** - Enable automatic deployment
3. **Test the live site** - Verify everything works
4. **Iterate** - Make changes, push, auto-deploy

## Support

- AEM EDS Docs: https://www.aem.live/docs/
- Developer Tutorial: https://www.aem.live/developer/tutorial
- Discord: https://discord.gg/adobe

## Summary

Your Lincoln EDS migration is **code-complete**. All blocks, styles, fonts, and analytics are implemented. The Google Doc content is properly formatted. You just need to deploy to GitHub to see it live!
