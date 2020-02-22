import { NestDataObject, FieldError } from 'react-hook-form'

export const hasErrors = (
  errorsFromForm: NestDataObject<Record<string, any>>
) => {
  return Object.keys(errorsFromForm).length ? true : false
}

const hasSpecificErrors = (errorsFromForm: FieldError | undefined) => {
  if (errorsFromForm !== undefined) {
    return Object.keys(errorsFromForm).length ? true : false
  }

  return false
}

export default hasSpecificErrors
