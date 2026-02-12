/**
 * Script to create a Google Doc with proper AEM EDS block formatting
 * 
 * Prerequisites:
 * 1. npm install googleapis
 * 2. Set up Google Cloud Project and enable Google Docs API
 * 3. Create OAuth 2.0 credentials
 * 4. Download credentials.json to project root
 * 
 * Usage:
 * node scripts/create-google-doc.js
 */

const { google } = require('googleapis');
const fs = require('fs');
const path = require('path');
const readline = require('readline');

// OAuth2 configuration
const SCOPES = ['https://www.googleapis.com/auth/documents', 'https://www.googleapis.com/auth/drive'];
const TOKEN_PATH = path.join(__dirname, '../token.json');
const CREDENTIALS_PATH = path.join(__dirname, '../credentials.json');

/**
 * Create an OAuth2 client
 */
async function authorize() {
  const credentials = JSON.parse(fs.readFileSync(CREDENTIALS_PATH));
  const { client_secret, client_id, redirect_uris } = credentials.installed || credentials.web;
  const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);

  // Check if we have a token
  if (fs.existsSync(TOKEN_PATH)) {
    const token = JSON.parse(fs.readFileSync(TOKEN_PATH));
    oAuth2Client.setCredentials(token);
    return oAuth2Client;
  }

  return getNewToken(oAuth2Client);
}

/**
 * Get new OAuth token
 */
function getNewToken(oAuth2Client) {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
  });

  console.log('Authorize this app by visiting this url:', authUrl);

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve, reject) => {
    rl.question('Enter the code from that page here: ', (code) => {
      rl.close();
      oAuth2Client.getToken(code, (err, token) => {
        if (err) return reject(err);
        oAuth2Client.setCredentials(token);
        fs.writeFileSync(TOKEN_PATH, JSON.stringify(token));
        console.log('Token stored to', TOKEN_PATH);
        resolve(oAuth2Client);
      });
    });
  });
}

/**
 * Create the Lincoln homepage Google Doc
 */
async function createLincolnDoc(auth) {
  const docs = google.docs({ version: 'v1', auth });
  const drive = google.drive({ version: 'v3', auth });

  // Create a new document
  const createResponse = await docs.documents.create({
    requestBody: {
      title: 'index',
    },
  });

  const documentId = createResponse.data.documentId;
  console.log(`Created document with ID: ${documentId}`);

  // Build the document content
  const requests = [
    // Insert Hero block table
    {
      insertTable: {
        rows: 5,
        columns: 2,
        location: {
          index: 1,
        },
      },
    },
    // Insert "Hero" text in first cell
    {
      insertText: {
        location: {
          index: 3,
        },
        text: 'Hero',
      },
    },
    // Insert image URL in second row
    {
      insertText: {
        location: {
          index: 9,
        },
        text: 'https://www.lincoln.com/content/dam/vdm_ford/live/en_us/lincoln/nameplate/nautilus/2026/collections/dm/26_lin_nau_40614_dm.jpg',
      },
    },
    // Insert heading in third row
    {
      insertText: {
        location: {
          index: 15,
        },
        text: 'The 2026 Lincoln Nautilus®',
      },
    },
    // Insert description in fourth row
    {
      insertText: {
        location: {
          index: 21,
        },
        text: 'Experience the perfect harmony of sophisticated design and intuitive technology.',
      },
    },
    // Insert CTA in fifth row
    {
      insertText: {
        location: {
          index: 27,
        },
        text: 'Explore Now',
      },
    },
    // Add horizontal line after table
    {
      insertText: {
        location: {
          index: 33,
        },
        text: '\n---\n\n',
      },
    },
    // Add "Discover Lincoln" heading
    {
      insertText: {
        location: {
          index: 38,
        },
        text: 'Discover Lincoln\n\n',
      },
    },
    // Style as Heading 2
    {
      updateParagraphStyle: {
        range: {
          startIndex: 38,
          endIndex: 55,
        },
        paragraphStyle: {
          namedStyleType: 'HEADING_2',
        },
        fields: 'namedStyleType',
      },
    },
    // Add description paragraph
    {
      insertText: {
        location: {
          index: 57,
        },
        text: 'Lincoln Motor Company is committed to creating vehicles that inspire and elevate every journey. Our lineup of luxury SUVs combines timeless design with cutting-edge technology.\n\n',
      },
    },
  ];

  // Apply all requests
  await docs.documents.batchUpdate({
    documentId,
    requestBody: {
      requests,
    },
  });

  // Make the document publicly viewable
  await drive.permissions.create({
    fileId: documentId,
    requestBody: {
      role: 'reader',
      type: 'anyone',
    },
  });

  console.log(`Document created successfully!`);
  console.log(`View it at: https://docs.google.com/document/d/${documentId}/edit`);
  console.log(`\nNext steps:`);
  console.log(`1. Move this document to a folder in Google Drive`);
  console.log(`2. Share that folder with "Anyone with the link"`);
  console.log(`3. Copy the folder URL`);
  console.log(`4. Update fstab.yaml with the folder ID`);

  return documentId;
}

// Run the script
authorize()
  .then(createLincolnDoc)
  .catch(console.error);
