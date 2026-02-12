# Simple Upload Instructions

## Step 1: Upload the HTML File

1. Open Google Drive in your browser
2. Create a new folder called "Lincoln EDS Content"
3. Open that folder
4. Click "New" → "File upload"
5. Select `content/index.html` from this project
6. Wait for upload to complete

## Step 2: Convert to Google Docs

1. Right-click the uploaded `index.html` file
2. Select "Open with" → "Google Docs"
3. Google will convert it to a Google Doc
4. The original HTML file will remain - you can delete it
5. Rename the Google Doc to just "index" (remove .html extension if shown)

## Step 3: Verify the Format

The document should have:
- A table with "Hero" in the first cell
- Lincoln Nautilus image
- Heading and description
- "Explore Now" link
- Horizontal lines between sections
- "Discover Lincoln" heading
- Another table with "Columns" and 4 vehicle descriptions

## Step 4: Share the Folder

1. Go back to the "Lincoln EDS Content" folder
2. Right-click the folder → "Share"
3. Click "Change" next to "Restricted"
4. Select "Anyone with the link"
5. Make sure role is "Viewer"
6. Click "Copy link"

## Step 5: Get the Folder ID

From the copied link (looks like):
```
https://drive.google.com/drive/folders/1ABC123XYZ456
```

The folder ID is: `1ABC123XYZ456`

## Step 6: Update fstab.yaml

Open `fstab.yaml` in your project and update line 2:

```yaml
mountpoints:
  /: https://drive.google.com/drive/folders/1ABC123XYZ456
```

Replace `1ABC123XYZ456` with your actual folder ID.

## Step 7: Test

1. Save `fstab.yaml`
2. Go to http://localhost:3000
3. Your Lincoln site should load with:
   - Full-width hero with Lincoln Nautilus
   - Lincoln fonts (Proxima Nova, Lincoln Miller)
   - Lincoln brand colors
   - Navigation block
   - Responsive design
   - Adobe Analytics detection

## Troubleshooting

**404 Error:**
- Make sure the folder is shared with "Anyone with the link"
- Double-check the folder ID in fstab.yaml
- Make sure the document is named exactly "index"

**No styling:**
- Check browser console for errors
- Make sure the AEM CLI is still running (`aem up`)
- Try hard refresh (Cmd+Shift+R or Ctrl+Shift+R)

**Tables look wrong:**
- The HTML→Google Docs conversion should preserve tables
- If not, you can manually adjust the table structure in Google Docs
- Follow the format in `content/EXACT-GOOGLE-DOCS-FORMAT.md`

That's it! The HTML file upload method is the easiest way to get started.
