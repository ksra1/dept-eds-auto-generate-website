# Google Docs API Setup Guide

This script automates creating the Google Doc with proper AEM EDS formatting.

## Prerequisites

### 1. Install Dependencies

```bash
npm install googleapis
```

### 2. Set Up Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project (or select existing)
3. Enable the following APIs:
   - Google Docs API
   - Google Drive API

**Steps:**
- Click "Enable APIs and Services"
- Search for "Google Docs API" → Enable
- Search for "Google Drive API" → Enable

### 3. Create OAuth 2.0 Credentials

1. In Google Cloud Console, go to "APIs & Services" → "Credentials"
2. Click "Create Credentials" → "OAuth client ID"
3. If prompted, configure OAuth consent screen:
   - User Type: External
   - App name: "Lincoln EDS Content Creator"
   - Add your email
   - Add scopes: `../auth/documents` and `../auth/drive`
4. Application type: "Desktop app"
5. Name: "Lincoln Content Script"
6. Click "Create"
7. Download the JSON file
8. Rename it to `credentials.json`
9. Move it to your project root directory

### 4. Run the Script

```bash
node scripts/create-google-doc.js
```

### 5. First-Time Authorization

1. The script will print a URL
2. Open that URL in your browser
3. Sign in with your Google account
4. Grant permissions
5. Copy the authorization code
6. Paste it back into the terminal
7. The script will create `token.json` for future use

### 6. Result

The script will:
- Create a new Google Doc named "index"
- Add the Hero block table with Lincoln Nautilus content
- Add the Discover Lincoln section
- Make the document publicly viewable
- Print the document URL

### 7. Next Steps

1. Open the created document
2. Move it to a folder in Google Drive
3. Share that folder: Right-click → Share → "Anyone with the link"
4. Copy the folder URL (e.g., `https://drive.google.com/drive/folders/ABC123`)
5. Update `fstab.yaml`:
   ```yaml
   mountpoints:
     /: https://drive.google.com/drive/folders/ABC123
   ```
6. Refresh http://localhost:3000

## Troubleshooting

### Error: "credentials.json not found"
- Make sure you downloaded the OAuth credentials
- Rename the file to exactly `credentials.json`
- Place it in the project root (same level as package.json)

### Error: "Access denied"
- Make sure you enabled both Google Docs API and Google Drive API
- Check that your OAuth consent screen is configured
- Try deleting `token.json` and re-authorizing

### Error: "Module not found: googleapis"
- Run `npm install googleapis`

## Alternative: Manual Creation

If you prefer not to use the API, follow the instructions in:
- `content/EXACT-GOOGLE-DOCS-FORMAT.md`

The manual process takes about 5 minutes and doesn't require API setup.
