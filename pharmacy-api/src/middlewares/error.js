/**
 * file: src/middlewares/error.js
 * description: file responsible for manipulate all the
 * errors messages in the application.
 * data: 08/09/2022
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

const { APIError } = require('../utils/errors/index');

module.exports = async (error, req, res, next) => {

  // ==> Check if the error is an instance of APIError
  if (error instanceof APIError) {
    return res.status(error.status).send({
      error: {
        code: error.status,
        message: error.message,
      }
    });
  }

  return res.status(500).send({
    error: {
      code: 500,
      message: 'Internal Server Error',
    }
  });
};