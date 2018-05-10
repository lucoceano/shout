export function isNotLoggedInError(errors = []) {
  return errors.some(error => error.code === 401);
}

export function isAlreadyLoggedInError(errors = []) {
  return errors.some(error => error.code === 1);
}
