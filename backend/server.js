require('rootpath')();
const express = require('express');
const app = express();
const ipfsClient = require('ipfs-http-client');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const cookieParser = require('cookie-parser');
const fs = require('fs'); //package present in node.js (no need to install)
const cors = require('cors');
const errorHandler = require('_middleware/error-handler');
const files = require('ipfs-http-client/src/files');
const ipfs = new ipfsClient({host: 'localhost', port: '5001', protocol: 'http'});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(fileUpload());

// allow cors requests from any origin and with credentials
app.use(cors({ origin: (origin, callback) => callback(null, true), credentials: true }));

// api routes
app.use('/accounts', require('./accounts/accounts.controller'));

// swagger docs route
app.use('/api-docs', require('_helpers/swagger'));

// upload files route 
const addFile = async(fileName, filePath) => {
  const file = fs.readFileSync(filePath); //buffer of the actual file using file path 
  const fileAdded = await ipfs.add({path: fileName, content: file});
  //console.log(fileAdded.cid.toString());
  // hash is the content identifier of the fileName
  const fileHash = fileAdded.cid.toString();

  return fileHash;
};

app.post('/upload', (req,res) =>{
  if (req.files === null) {
      return res.status(400).json({ msg: 'No file uploaded' });
  }
  const file = req.files.file;

  //download the file from the server
  file.mv(`${__dirname}/fileUploads/${file.name}`, async(err) => {
      if(err) {
          console.log('Error: failed to download the file');
          return res.status(500).send(err);
      }

      const fileHash = await addFile(file.name, `${__dirname}/fileUploads/${file.name}`);
      
      // to remove file from the file system
      fs.unlink(`${__dirname}/fileUploads/${file.name}`, (err) => {
          if(err) console.log(err);
      });

      // creating a json of the fileName and fileHash
      res.json({ fileName: file.name, fileHash: fileHash});
      
  })
});



// global error handler
app.use(errorHandler);

// start server
const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 4000;
app.listen(port, () => {
    console.log('Server listening on port ' + port);
});
