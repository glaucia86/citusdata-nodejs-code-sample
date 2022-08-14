/**
 * file: GetPharmacies/index.js
 * date: 03/20/2022
 * description: file responsible for list all the 'Pharmacies'
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

const prisma = require('../shared/prisma');
const handleError = require('../shared/error');

module.exports = async function (context, req) {
  try {
    const pharmacies = await prisma.pharmacy.findMany({
      orderBy: [{ pharmacy_name: 'asc' }],
    });

    return {
      status: 200,
      body: pharmacies,
    };
  } catch (error) {
    context.log('Error to list all the Pharmacies.');
    context.log(error);
    return handleError(500, error);
  }
};