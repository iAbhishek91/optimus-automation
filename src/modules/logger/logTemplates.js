export const actionLogTemplate = (
  action,
  locater,
  attribute = undefined,
  data = undefined,
) => {
  const attributeLog = attribute ? `attribute: "${attribute}"` : '';
  const dataLog = data ? `data: "${data}"` : '';

  return `Action[${action}]: ${locater}, ${attributeLog}, ${dataLog}.`;
};

export const validationLogTemplate = (
  attributeTobeValidated,
  isValidationSuccessful,
  message,
) => {
  const validationStatusLog = isValidationSuccessful ? 'Success' : 'Fail';

  return `Validation[${attributeTobeValidated}]: ${validationStatusLog}! ${message}.`;
};
