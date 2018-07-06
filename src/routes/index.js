// src/routes/index.js
const router = require('express').Router();
const mongoose = require('mongoose');

//Example Knife Objects

const KNIVES = [
  {id: 'a', brand: "Chris Reeve Knives", model: "Large Sebenza 21", system: "KME", angle: "22"},
  {id: 'b', brand: "Benchmade", model: "Contego", system: "KME", angle: "20"},
  {id: 'c', brand: "Spyderco", model: "Paramilitary 2", system: "Wicked Edge", angle: "18"},
  {id: 'd', brand: "Holt Bladeworks", model: "Specter", system: "Edge Pro", angle: "19"},
];

/**
 * C - reate
 */
router.post('/file', function(req, res, next) {
  res.end('Create a new file');
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
  res.end(`Updating file '${req.params.fileId}'`);
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
   res.json(KNIVES);
 });


module.exports = router;
