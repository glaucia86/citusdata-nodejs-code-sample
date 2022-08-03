/**
 * file: src/app.js
 * description: file responsible for execute the 'server.js' file
 * data: 08/03/2022
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

const express = require('express');
const cors = require('cors');

const app = express();

// ==> API Routes
const index = require('./routes/index');
// const pharmacyRoute = require('./routes/pharmacy.routes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: 'application/json' }));
app.use(cors());

app.use(index);
// app.use('/api/', pharmacyRoute);

module.exports = app;
