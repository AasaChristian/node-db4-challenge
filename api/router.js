const express = require('express');

const Schemes = require('./scheme-model')

const router = express.Router();

router.get('/hubs', (req, res) => {
  Schemes.list()
  .then(hubs => {
    res.json(hubs);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get schemes' });
  });
});