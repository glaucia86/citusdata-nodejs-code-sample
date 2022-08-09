/**
 * file: src/utils/errors/api-errors.js
 * description: file responsible for manipulate all the
 * errors messages in the application.
 * data: 08/09/2022
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

class APIError extends Error {
  constructor(status, message) {
    super();
    this.status = status;
    this.message = message;
  }
}

class BadRequestError extends APIError {
  constructor(message = 'Bad Request') {
    super(400, message);
  }
}

class AccessDeniedError extends APIError {
  constructor(message = 'Access Denied') {
    super(401, message);
  }
}

class UnauthorizedError extends APIError {
  constructor(message = 'Unauthorized') {
    super(403, message);
  }
}

class ForbiddenError extends APIError {
  constructor(message = 'Forbidden') {
    super(403, message);
  }
}

class NotFoundError extends APIError {
  constructor(message = 'Not Found') {
    super(404, message);
  }
}

class MethodNotAllowedError extends APIError {
  constructor(message = 'Method Not Allowed') {
    super(405, message);
  }
}

class ConflictError extends APIError {
  constructor(message = 'Conflict') {
    super(408, message)
  }
}

class UnprocessableEntityError extends APIError {
  constructor(message = 'Unprocessable Entity') {
    super(422, message);
  }
}

class UnsupportedMediaTypeError extends APIError {
  constructor(message = 'Unsupported Media Type') {
    super(415, message);
  }
}

class InternalServerError extends APIError {
  constructor(message = 'Internal Server Error') {
    super(500, message);
  }
}

module.exports = {
  APIError,
  ConflictError,
  ForbiddenError,
  NotFoundError,
  BadRequestError,
  UnauthorizedError,
  AccessDeniedError,
  InternalServerError,
  MethodNotAllowedError,
  UnProcessableEntityError,
  UnSupportedMediaTypeError
};