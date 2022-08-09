/**
 * file: src/controllers/pharmacy.controllers.js
 * description: file responsible for the CRUD logic (API - Pharmacy)
 * data: 08/03/2022
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

const db = require('../config/postgres-database');

// ==> Method responsible for create a new 'Pharmacy
exports.createPharmacy = async (req, res) => {
  try {
    const { pharmacy_name, city, state, zip_code } = req.body;
    const { rows } = await db.query(
      'INSERT INTO pharmacy (pharmacy_name, city, state, zip_code) VALUES ($1, $2, $3, $4)',
      [pharmacy_name, city, state, zip_code]
    );

    res.status(201).send({
      message: 'Pharmacy created successfully!',
    });

    return rows;
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
  try {
    const { id } = req.params;
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
    }
    res.status(500).send({
      message: 'Error to list the Pharmacy',
    });
  }
};

// ==> Method responsible for update a Pharmacy by Id
exports.updatePharmacyById = async (req, res) => {
  try {
    const id = req.params.id;
    const { pharmacy_name, city, state, zip_code } = req.body;

    const pharmarcyRegistryExists = await db.query(
      'SELECT * FROM pharmacy WHERE pharmacy_id = $1',
      [id]
    );

    if (!pharmarcyRegistryExists.rows.length) {
      throw 'pharmacy_not_found';
    } else {
      const { rows } = await db.query(
        'UPDATE pharmacy SET pharmacy_name = $1, city = $2, state = $3, zip_code = $4 WHERE pharmacy_id = $5',
        [pharmacy_name, city, state, zip_code, id]
      );

      res.status(200).send({
        message: 'Pharmacy updated successfully!',
        body: {
          pharmacy: { id, pharmacy_name, city, state, zip_code },
        },
      });

      return rows;
    }
  } catch (error) {
    console.log('updatePharmacyById', error);
    if (error === 'pharmacy_not_found') {
      res.status(404).send({
        message: 'Pharmacy not found.',
      });
    } else {
      res.status(500).send({
        message: 'Error to update the Pharmacy',
      });
    }
  }
};

// ==> Method responsible for delete a Pharmacy by Id
exports.deletePharmacyById = async (req, res) => {
  const { id } = req.params;
  try {
    await db.query('DELETE FROM pharmacy WHERE pharmacy_id = $1', [id]);
    res.status(200).send({
      message: 'Pharmacy deleted successfully!',
    });
  } catch (error) {
    console.log('deletePharmacyById', error);
    res.status(500).send({
      message: 'Error to delete the Pharmacy',
    });
  }
};
