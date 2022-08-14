/**
 * file: CreatePharmacy/index.js
 * date: 08/13/2022
 * description: file responsible for create a new 'Pharmacy'
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

const prisma = require('../shared/prisma');
const handleError = require('../shared/error');

module.exports = async function (context, req) {
  try {
    const { pharmacy_name, city, state, zip_code,} = req.body;

    const pharmacy = await prisma.pharmacy.create({
      data: {
        pharmacy_name,
        city,
        state,
        zip_code,
      },
    });

    return {
      status: 201,
      body: pharmacy,
    };

  } catch (error) {
    context.log('Error to create a new Pharmacy.');
    context.log(error);
    return handleError(500, error);
  }
};