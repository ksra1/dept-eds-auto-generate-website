# Google Drive Setup Instructions for AEM Edge Delivery Services

## Step 1: Create Google Drive Folder Structure

1. Go to Google Drive (drive.google.com)
2. Create a new folder named "Lincoln EDS Content"
3. Inside that folder, create these files:

### File: index (Google Doc)
```
Title: The 2026 Lincoln Nautilus®

[Insert image: Lincoln Nautilus hero image]
URL: https://www.lincoln.com/content/dam/vdm_ford/live/en_us/lincoln/nameplate/nautilus/2026/collections/dm/26_lin_nau_40614_dm.jpg

Heading 1: The 2026 Lincoln Nautilus®

Paragraph: Experience the perfect harmony of sophisticated design and intuitive technology.

Link: Explore Now → #explore
(Format as button)

---

Heading 2: Discover Lincoln

Paragraph: Lincoln Motor Company is committed to creating vehicles that inspire and elevate every journey. Our lineup of luxury SUVs combines timeless design with cutting-edge technology.

---

Heading 2: Our Vehicles

Table (4 columns):
| Nautilus | Aviator | Corsair | Navigator |
| The midsize luxury SUV that redefines sophistication. | Grand touring SUV with three rows of refined comfort. | Compact luxury with distinctive style. | The pinnacle of full-size luxury. |

---

Heading 2: Experience Lincoln

Paragraph: Visit your local Lincoln retailer to experience the future of luxury.

Links:
- Find a Dealer → /dealers
- Schedule Test Drive → /test-drive  
- Build & Price → /build
```

## Step 2: Format the Google Doc

1. **Title**: Use "Heading 1" style for "The 2026 Lincoln Nautilus®"
2. **Image**: Insert → Image → By URL (paste the Lincoln Nautilus image URL)
3. **Sections**: Use "Heading 2" for section titles
4. **Tables**: Insert → Table for the vehicles section
5. **Links**: Highlight text → Insert link

## Step 3: Share the Folder

1. Right-click the "Lincoln EDS Content" folder
2. Click "Share"
3. Change to "Anyone with the link can view"
4. Copy the folder URL (it will look like: `https://drive.google.com/drive/folders/FOLDER_ID`)

## Step 4: Update fstab.yaml

1. Open `fstab.yaml` in your project
2. Replace the mountpoints URL with your Google Drive folder URL:

```yaml
mountpoints:
  /: https://drive.google.com/drive/folders/YOUR_FOLDER_ID
```

## Step 5: Block Markup in Google Docs

To use the hero and navigation blocks you created:

### Hero Block
In your Google Doc, create a table:

```
| Hero |
|------|
| [Image] |
| The 2026 Lincoln Nautilus® |
| Experience the perfect harmony of sophisticated design and intuitive technology. |
| [Explore Now link] |
```

### Navigation Block
Create another table:

```
| Navigation |
|------------|
| Home |
| Vehicles |
| Shopping Tools |
| Ownership |
| Certified Pre-Owned |
```

## Step 6: Test Locally

1. Save your changes to fstab.yaml
2. The AEM CLI should automatically reload
3. Visit http://localhost:3000
4. Your content should now appear with Lincoln styling!

## Alternative: Quick Start Template

If you want to skip manual creation, I can provide you with:
1. A pre-formatted Google Doc template
2. Or instructions to use Microsoft Word to create a .docx file that you can upload

Let me know which approach you prefer!
