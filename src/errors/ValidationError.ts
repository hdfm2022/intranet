import { BaseError, HttpStatusCode } from "./BaseError";

class ValidationError extends BaseError {
    constructor(list = [], description = 'Validation Error') {
        super(HttpStatusCode.BAD_REQUEST, 'Validation Error', true, list);
      }
}

export { ValidationError }