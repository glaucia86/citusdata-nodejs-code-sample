/**
 * file: shared/error.js
 * date: 08/13/2022
 * description: file responsible for sending error messages.
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

module.exports = function (status, message) {
  return {
    status: status,
    body: message,
  };
};