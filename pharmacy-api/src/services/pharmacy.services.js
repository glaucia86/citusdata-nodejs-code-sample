/**
 * file: src/services/pharmacy.services.js
 * description:
 * data: 08/09/2022
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

const { v4: uuid } = require('uuid');
const db = require('../config/postgres-database');

exports.createPharmacy = async ({ name, city, state, zip_code }) => {
  const id = uuid();
  await db.query(
    'INSERT INTO pharmacies (id, name, city, state, zip_code) VALUES ($1, $2, $3, $4, $5)',
    [id, name, city, state, zip_code]
  );

  return { id, name, city, state, zip_code };
};

exports.listAllPharmacies = async () => {
  const listAllPharmacies = await db.query(
    'SELECT * FROM pharmacies ORDER BY name ASC'
  );

  return listAllPharmacies.rows;
};

exports.findPharmacyById = async () => {
  return;
};

exports.updatePharmacyById = async () => {
  return;
};

exports.deletePharmacyById = async () => {
  return;
};
