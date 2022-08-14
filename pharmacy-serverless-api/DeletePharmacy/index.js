/**
 * file: DeletePharmacy/index.js
 * date: 03/20/2022
 * description: file responsible for delete an 'Pharmacy' by Id
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

const prisma = require('../shared/prisma');
const handleError = require('../shared/error');

module.exports = async function (context, req) {
  try {
    const { id } = req.params;
    await prisma.pharmacy.delete({
      where: {
        pharmacy_id: String(id),
      },
    });

    return {
      status: 204,
      body: 'Pharmacy deleted successfully.'
    };

  } catch (error) {
    context.log('Error to delete Pharmacy.');
    context.log(error);
    return handleError(500, error);
  }
};