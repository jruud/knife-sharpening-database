// src/routes/index.js
const router = require('express').Router();
const mongoose = require('mongoose');

//Example Knife Objects

const KNIVES = [
  {brand: "Chris Reeve Knives", model: "Large Sebenza 21", system: "KME", angle: "22"},
  {brand: "Benchmade", model: "Contego", system: "KME", angle: "20"},
  {brand: "Spyderco", model: "Paramilitary 2", system: "Wicked Edge", angle: "18"},
  {brand: "Holt Bladeworks", model: "Specter", system: "Edge Pro", angle: "19"},
];

/**
 * C - reate
 */
router.post('/file', function(req, res, next) {
  const Knife = mongoose.model('Knife')
  const fileData = {
    brand: req.body.brand,
    model: req.body.model
  };

  Knife.create(fileData, function (err, newKnife) {
    if (err) {
      console.log(err);
      return res.status(500).json(err);
    }
    res.json(newKnife);
  });
});

/**
 * R - ead
 */
 router.get('/file/:fileId', function(req, res, next) {
   const { fileId } = req.params;

   const file = KNIVES.find(entry => entry.id === fileId);
   if (!file) {
     return res.status(404).end(`Could not find file '${fileId}'`);
   }

   res.json(file);
 });
/**
 * U - pdate
 */
 router.put('/file/:fileId', function(req, res, next) {
   const Knife = mongoose.model('Knife');
   const knifeId = req.params.fileId;

   Knife.findById(knifeId, function(err, knife) {
     if (err) {
       console.error(err);
       return res.status(500).json(err);
     }
     if (!knife) {
       return res.status(404).json({message: "File not found"});
     }

     knife.brand = req.body.brand;
     knife.model = req.body.model;

     knife.save(function(err, savedFile) {
       if (err) {
         console.error(err);
         return res.status(500).json(err);
       }
       res.json(savedFile);
     })

   })
 });
/**
 * D - elete
 */
router.delete('/file/:fileId', function(req, res, next) {
  res.end(`Deleting file '${req.params.fileId}'`);
});
/**
 * ¯\_(ツ)_/¯ - list
 */
 router.get('/file', function(req, res, next) {
    const Knife = mongoose.model('Knife');

    Knife.find({deleted: {$ne: true}}, function(err, files) {
     if (err) {
       console.log(err);
       return res.status(500).json(err);
     }

     res.json(files);
   });
 });


module.exports = router;
