# Quick Start: Upload to Google Drive

## Option 1: Copy/Paste into Google Docs (Easiest)

1. **Create a new Google Doc** named "index"
2. **Copy this content** and paste into the Google Doc:

---

**[Insert Image Here]**
Image URL: https://www.lincoln.com/content/dam/vdm_ford/live/en_us/lincoln/nameplate/nautilus/2026/collections/dm/26_lin_nau_40614_dm.jpg

# The 2026 Lincoln Nautilus®

Experience the perfect harmony of sophisticated design and intuitive technology.

[Explore Now](#explore)

---

**Create a table for the Hero block:**

| Hero |  |
|------|--|
| [Insert same image above] | |
| The 2026 Lincoln Nautilus® | |
| Experience the perfect harmony of sophisticated design and intuitive technology. | |
| [Explore Now](#explore) | |

---

## Discover Lincoln

Lincoln Motor Company is committed to creating vehicles that inspire and elevate every journey. Our lineup of luxury SUVs combines timeless design with cutting-edge technology.

---

## Our Vehicles

**Create a 4-column table:**

| Columns (4 columns) | | | |
|---------------------|--|--|--|
| **Nautilus**<br>The midsize luxury SUV that redefines sophistication. | **Aviator**<br>Grand touring SUV with three rows of refined comfort. | **Corsair**<br>Compact luxury with distinctive style. | **Navigator**<br>The pinnacle of full-size luxury. |

---

## Experience Lincoln

Visit your local Lincoln retailer to experience the future of luxury.

[Find a Dealer](/dealers) | [Schedule Test Drive](/test-drive) | [Build & Price](/build)

---

3. **Format the document:**
   - Apply "Heading 1" to "The 2026 Lincoln Nautilus®"
   - Apply "Heading 2" to section titles
   - Insert the image: Insert → Image → By URL
   - Create tables: Insert → Table

4. **Share the folder:**
   - Right-click parent folder → Share → "Anyone with link can view"
   - Copy the folder URL

5. **Update fstab.yaml:**
   ```yaml
   mountpoints:
     /: https://drive.google.com/drive/folders/YOUR_FOLDER_ID
   ```

## Option 2: Use the HTML File

1. Open `content/index-for-google-drive.html` in a web browser
2. Select all (Ctrl+A / Cmd+A)
3. Copy (Ctrl+C / Cmd+C)
4. Create new Google Doc named "index"
5. Paste (Ctrl+V / Cmd+V)
6. Google Docs will convert the HTML to formatted content
7. Follow steps 4-5 from Option 1

## Option 3: Use Microsoft Word (if you have it)

1. Open Microsoft Word
2. Create a new document
3. Paste the content from Option 1
4. Format as described
5. Save as "index.docx"
6. Upload to Google Drive
7. Right-click → Open with → Google Docs
8. Follow steps 4-5 from Option 1

## What Happens Next

Once you update `fstab.yaml` with your Google Drive folder ID:
- The AEM CLI will fetch content from Google Drive
- Your Lincoln blocks (hero, navigation) will be applied
- Lincoln fonts and styles will be loaded
- Adobe Analytics detection will run
- Site will be viewable at http://localhost:3000

## Folder Structure in Google Drive

```
Lincoln EDS Content/
└── index (Google Doc)
```

That's it! The single "index" Google Doc is all you need to get started.
