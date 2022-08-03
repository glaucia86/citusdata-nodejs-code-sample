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

// Route responsible to list a Pharmacy by Id: (GET) localhost:3000/api/pharmacies/:id
router.get('/pharmacies/:id', pharmacyController.findPharmacyById);

// Route responsible to update a Pharmacy by Id: (PUT) localhost:3000/api/pharmacies/:id
router.put('/pharmacies/:id', pharmacyController.updatePharmacyById);

module.exports = router;
