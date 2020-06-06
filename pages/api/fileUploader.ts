// Imports the Google Cloud client library
const { Storage } = require('@google-cloud/storage');

// Creates a client
const projectId = 'wedding-website-279011';
const keyFileName = 'public/keyfile.json';
const storage = new Storage({ projectId, keyFileName });

const bucketName = 'foto-album';
const filename = 'public/trouwlocatie.jpg';

export default (request, response) => {
  async function uploadFile() {
    await storage.bucket(bucketName).upload(filename, {
      gzip: true,
      metadata: {
        cacheControl: 'public, max-age=31536000',
      },
    });

    console.log(`${filename} uploaded to ${bucketName}.`);

    response.status(200).end();
  }

  uploadFile().catch(response.status(400).end());
};
