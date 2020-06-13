// Imports the Google Cloud client library
const { Storage } = require('@google-cloud/storage');

// External
const fs = require('fs').promises;

// Creates a client
const projectId = 'wedding-website-279011';
const keyFileName = 'public/keyfile.json';
const storage = new Storage({ projectId, keyFileName });

const bucketName = 'availability-wedding';
const filename = 'availability.json';
const localFileDestination = `./public/${filename}`;

export default (request, response) => {
  const downloadFile = async () => {
    const options = {
      destination: localFileDestination,
    };

    return await storage.bucket(bucketName).file(filename).download(options);
  };

  const writeDataToFile = async () => {
    try {
      // Get the data from the Bucket File
      const data = await fs.readFile(localFileDestination, 'utf8');

      const dataParsed = data !== '' ? JSON.parse(data) : { attendees: [] };
      dataParsed.attendees.push(request.query);

      // Writing to the file our current Query parameters.
      await fs.writeFile(localFileDestination, JSON.stringify(dataParsed));
    } catch (error) {
      console.log(error);
    }
  };

  const uploadFile = async () => {
    return await storage.bucket(bucketName).upload(localFileDestination, {
      gzip: true,
      metadata: {
        cacheControl: 'public, max-age=31536000',
      },
    });
  };

  const removeLocalFile = () => {
    fs.unlink(localFileDestination);
  };

  downloadFile()
    .then(async () => {
      await writeDataToFile();
    })
    .then(async () => {
      await uploadFile();
    })
    .then(() => {
      removeLocalFile();
    })
    .then(response.status(200).end())
    .catch(response.status(400).end());
};
