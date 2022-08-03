/**
 * file: src/controllers/pharmacy.controllers.js
 * description: file responsible for the CRUD logic (API - Pharmacy)
 * data: 08/03/2022
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

const db = require('../config/db.config');

// ==> Method responsible for create a new 'Pharmacy
exports.createPharmacy = async (req, res) => {
  const { pharmacy_name, city, state, zip_code } = req.body;
  try {
    const { rows } = await db.query(
      'INSERT INTO pharmacy (pharmacy_name, city, state, zip_code) VALUES ($1, $2, $3, $4)',
      [pharmacy_name, city, state, zip_code]
    );

    res.status(201).send({
      message: 'Pharmacy created successfully!',
      body: {
        pharmacy: { pharmacy_name, city, state, zip_code },
      },
    });
  } catch (error) {
    console.log('createPharmacy', error);
    res.status(500).send({ message: 'Error to create a new Pharmacy' });
  }
};

// ==> Method responsible for list all 'Pharmacies'
exports.listAllPharmacies = async (req, res) => {
  try {
    const { rows } = await db.query(
      'SELECT * FROM pharmacy ORDER BY pharmacy_name ASC'
    );

    res.status(200).send(rows);
  } catch (error) {
    console.log('listAllPharmacies', error);
    res.status(500).send({
      message: 'Error to list all the Pharmacies',
    });
  }
};
