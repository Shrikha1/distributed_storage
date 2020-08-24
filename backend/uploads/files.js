const express = require('express');
const route = express.Router();

route.post('/upload', (req, res) => {

    if(req.files === null) {
        return res.status(400).json({msg: 'No file uploaded'});
    }

    const file = req.files.file;

    file.mv('${__dirname}/fileUploads/${file.name}', err => {
    if(err) {
        console.error(err);
        return res.status(500).send(err);
    }

    res.json({ fileName: file.name, filePath: '/fileUploads/${file.name}' });

    });
});

exports = module.exports = {route};