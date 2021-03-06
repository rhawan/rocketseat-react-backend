const express = require('express');
const multer = require('multer');
const multerConfig = require('./config/multer');

const BoxController = require('./controllers/BoxController');
const FileController = require('./controllers/FileController');

const routes = express.Router();

routes.get('/teste', (req, res) => res.send('Hello Rocket'));

routes.get('/boxes/:id', BoxController.show);
routes.get('/boxes', BoxController.listAll);
routes.post('/boxes', BoxController.store);
routes.post('/boxes/:id/files',
  multer(multerConfig).single('file'),
  FileController.store);

module.exports = routes;
