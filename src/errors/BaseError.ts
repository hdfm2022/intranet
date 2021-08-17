export enum HttpStatusCode {
  OK = 200,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
  INTERNAL_SERVER = 500,
 }

class BaseError extends Error {
    public readonly httpCode: HttpStatusCode;
    public readonly isOperational: boolean;
    public readonly list: Array<string>;
    
    constructor(httpCode: HttpStatusCode, description: string, isOperational: boolean, list: Array<string>) {
      super(description);
      Object.setPrototypeOf(this, new.target.prototype);
    
      this.httpCode = httpCode;
      this.isOperational = isOperational;
      this.list = list;
    
      Error.captureStackTrace(this);
    }
   }

   export { BaseError }