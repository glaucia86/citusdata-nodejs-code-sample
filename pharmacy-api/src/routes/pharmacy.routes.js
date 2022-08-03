/**
 * file: src/routes/pharmacy.routes.js
 * description: file responsible for Pharmacy API routes
 * data: 08/03/2022
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

const router = require('express-promise-router')();
const pharmacyController = require('../controllers/pharmacy.controller');

// Route responsible to create a new 'Pharmacy': (POST) localhost:3000/api/pharmacies
router.post('/pharmacies', pharmacyController.createPharmacy);

// Route responsible to list all 'Pharmacies': (GET) localhost:3000/api/pharmacies
router.get('/pharmacies', pharmacyController.listAllPharmacies);

module.exports = router;
