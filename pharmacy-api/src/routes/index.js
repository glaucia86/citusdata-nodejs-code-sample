/**
 * file: src/routes/index.js
 * description: file responsible for the API call in the application on the Back-End side
 * data: 08/03/2022
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

const express = require('express');

const router = express.Router();

router.get('/api', (req, res) => {
  res.status(200).send({
    success: 'true',
    message: 'Welcome to the Pharmacy API',
    version: '1.0.0',
  });
});

module.exports = router;
