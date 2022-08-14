/**
 * file: GetPharmacy/index.js
 * date: 03/20/2022
 * description: file responsible for list an 'Pharmacy' by Id
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

const prisma = require('../shared/prisma');
const handleError = require('../shared/error');

module.exports = async function (context, req) {
  try {
    const { id } = req.params;

    const pharmacy = await prisma.pharmacy.findUnique({
      where: {
        pharmacy_id: String(id),
      },
    });

    if (pharmacy === null) {
      return handleError(404, 'Pharmacy not Found.');
    }

    return {
      status: 200,
      body: pharmacy,
    };
  } catch (error) {
    context.log('Error to list an Pharmacy.');
    context.log(error);
    return handleError(500, error);
  }
};