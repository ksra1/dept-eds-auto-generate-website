# EXACT Google Docs Format for AEM EDS

## Create This Exact Document in Google Docs

### Document Name: `index`

---

## Step-by-Step Instructions

### 1. Create Hero Block

**Insert → Table → 2 columns x 5 rows**

Row 1: `Hero` | (leave empty)
Row 2: Insert image by URL: `https://www.lincoln.com/content/dam/vdm_ford/live/en_us/lincoln/nameplate/nautilus/2026/collections/dm/26_lin_nau_40614_dm.jpg` | (leave empty)
Row 3: `The 2026 Lincoln Nautilus®` | (leave empty)
Row 4: `Experience the perfect harmony of sophisticated design and intuitive technology.` | (leave empty)
Row 5: `Explore Now` (make this a link to `#explore`) | (leave empty)

**Visual representation:**
```
┌─────────────────────────────────────────────────┬────┐
│ Hero                                            │    │
├─────────────────────────────────────────────────┼────┤
│ [Lincoln Nautilus Image]                        │    │
├─────────────────────────────────────────────────┼────┤
│ The 2026 Lincoln Nautilus®                      │    │
├─────────────────────────────────────────────────┼────┤
│ Experience the perfect harmony of sophisticated │    │
│ design and intuitive technology.                │    │
├─────────────────────────────────────────────────┼────┤
│ Explore Now                                     │    │
└─────────────────────────────────────────────────┴────┘
```

### 2. Add Horizontal Line

Press Enter after the table, then Insert → Horizontal line

### 3. Add Regular Content

Type this as normal paragraphs (no table):

**Heading 2:** `Discover Lincoln`

**Paragraph:** `Lincoln Motor Company is committed to creating vehicles that inspire and elevate every journey. Our lineup of luxury SUVs combines timeless design with cutting-edge technology.`

### 4. Add Another Horizontal Line

Insert → Horizontal line

### 5. Create Columns Block

**Insert → Table → 5 columns x 2 rows**

Row 1: `Columns` | (merge cells 2-5 or leave empty)
Row 2: 
- Column 1: `Nautilus` (heading) + `The midsize luxury SUV that redefines sophistication.` (paragraph)
- Column 2: `Aviator` (heading) + `Grand touring SUV with three rows of refined comfort.` (paragraph)
- Column 3: `Corsair` (heading) + `Compact luxury with distinctive style.` (paragraph)
- Column 4: `Navigator` (heading) + `The pinnacle of full-size luxury.` (paragraph)

**Visual representation:**
```
┌─────────┬─────────┬─────────┬───────────┬────┐
│ Columns │         │         │           │    │
├─────────┼─────────┼─────────┼───────────┼────┤
│ Nautilus│ Aviator │ Corsair │ Navigator │    │
│ The mid-│ Grand   │ Compact │ The pinn- │    │
│ size... │ touring │ luxury  │ acle...   │    │
└─────────┴─────────┴─────────┴───────────┴────┘
```

### 6. Add Final Section

**Heading 2:** `Experience Lincoln`

**Paragraph:** `Visit your local Lincoln retailer to experience the future of luxury.`

**Links:** 
- `Find a Dealer` → `/dealers`
- `Schedule Test Drive` → `/test-drive`
- `Build & Price` → `/build`

---

## Important Notes

1. **Block names** (Hero, Columns) go in the FIRST cell of the FIRST row
2. **Images** - Use Insert → Image → By URL
3. **Links** - Highlight text → Insert link (Cmd+K)
4. **Headings** - Use Format → Paragraph styles → Heading 2
5. **Tables** - The second column can be empty for most blocks
6. **Horizontal lines** - Use Insert → Horizontal line (not just dashes)

## After Creating the Document

1. **Share the folder** containing this doc
   - Right-click folder → Share
   - Change to "Anyone with the link" → Viewer
   - Copy the folder URL

2. **Get the Folder ID** from the URL
   - URL looks like: `https://drive.google.com/drive/folders/1ABC123XYZ`
   - Folder ID is: `1ABC123XYZ`

3. **Update fstab.yaml**
   ```yaml
   mountpoints:
     /: https://drive.google.com/drive/folders/1ABC123XYZ
   ```

4. **Refresh** http://localhost:3000

The site should now load with your Lincoln styling!
