const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get('/', (req, res) => {
  fs.readdir(`${__dirname}/../public/galleries`, (err, files) => {
    console.log('reading galleries', files);
    if (!files) {
      return res.status(404).send({"galleries": "Empty"});
    }

    res.render('galleries', {galleries: files});
  });

});

router.get('/:galleryID', (req, res) => {
  let id = req.params.galleryID;
  fs.readdir(`${__dirname}/../public/galleries/${id}`, (err, files) => {
    console.log('reading ' + id + '', files);
    if (!files) {
      return res.status(404).send({"gallery": "Not Found"});
    }
    res.render('gallery', {images: files})
  });

});

module.exports = router;
