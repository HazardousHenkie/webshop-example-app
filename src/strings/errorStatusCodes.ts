export const BAD_REQUEST = 400
export const UNAUHORIZED = 401
export const SERVER_ERROR = 500
export const SERVICE_UNAVAILABLE = 503
export const NOT_FOUND = 404

interface ErrorMessagesInterface {
  readonly BAD_REQUEST: typeof BAD_REQUEST
  readonly UNAUHORIZED: typeof UNAUHORIZED
  readonly SERVER_ERROR: typeof SERVER_ERROR
  readonly SERVICE_UNAVAILABLE: typeof SERVICE_UNAVAILABLE
  readonly NOT_FOUND: typeof NOT_FOUND
}

const ERROR_MESSAGES: ErrorMessagesInterface = {
  BAD_REQUEST,
  UNAUHORIZED,
  SERVER_ERROR,
  SERVICE_UNAVAILABLE,
  NOT_FOUND
}

export default ERROR_MESSAGES
