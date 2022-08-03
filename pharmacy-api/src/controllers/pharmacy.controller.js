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

// ==> Method responsible for find a Pharmacy by Id
exports.findPharmacyById = async (req, res) => {
  const { id } = req.params;
  try {
    const { rows } = await db.query(
      'SELECT * FROM pharmacy WHERE pharmacy_id = $1',
      [id]
    );

    if (!rows.length) {
      throw 'pharmacy_not_found';
    }

    res.status(200).send(rows[0]);
  } catch (error) {
    console.log('findPharmacyById', error);
    if (error === 'pharmacy_not_found') {
      res.status(404).send({
        message: 'Pharmacy not found.',
      });
    } else {
      res.status(500).send({
        message: 'Error to find the Pharmacy',
      });
    }
  }
};
