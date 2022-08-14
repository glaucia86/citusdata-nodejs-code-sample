/**
 * file: UpdatePharmacy/index.js
 * date: 04/05/2022
 * description: file responsible for update an 'Pharmacy' by Id
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

const prisma = require('../shared/prisma');
const handleError = require('../shared/error');

module.exports = async function (context, req) {
  try {
    const { id } = req.params;
    const { pharmacy_name, city, state, zip_code,} = req.body;

    const pharmacyRegistrationExists = await prisma.pharmacy.findUnique({
      where: {
        pharmacy_id: String(id),
      },
    });

    if (!pharmacyRegistrationExists) {
      return handleError(404, 'Pharmacy not found!');
    }

    const pharmacy = await prisma.pharmacy.update({
      where: {
        pharmacy_id: String(id),
      },
      data: {
        pharmacy_name: pharmacy_name || undefined,
        city: city || undefined,
        state: state || undefined,
        zip_code: zip_code || undefined,
      },
    });

    return {
      status: 200,
      body: pharmacy,
    };
  } catch (error) {
    context.log('Error to update Pharmacy.');
    context.log(error);
    return handleError(500, error);
  }
};