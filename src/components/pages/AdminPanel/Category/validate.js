import escape from 'validator/es/lib/escape';
import isAlphanumeric from 'validator/es/lib/isAlphanumeric';
import isBoolean from 'validator/es/lib/isBoolean';

export default function validate(values) {
  let errors = {};
  if (!values.name) {
    errors.name = 'Name is required';
  } else if (!escape(values.name) || (!isAlphanumeric(values.name, 'en-US') && !isAlphanumeric(values.name, 'ru-RU'))) {
    errors.name = 'Name is invalid';
  }
  if (values.status && !isBoolean(values.status.toString())) {
    errors.status = 'Status is invalid';
  }

  return errors;
}
