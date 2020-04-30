import isAlphanumeric from 'validator/es/lib/isAlphanumeric';
import isMobilePhone from 'validator/es/lib/isMobilePhone';

export default function validate(values) {
  let errors = {};
  if (values.name) {
    const validatingName = validateString({val: values.name, field: 'name', isRequired: true});
    if (!validatingName.isValid) {
      errors.name = validatingName.error;
    }
  }
  if (values.surname) {
    const validatingSurname = validateString({val: values.surname, field: 'surname'});
    if (!validatingSurname.isValid) {
      errors.surname = validatingSurname.error;
    }
  }
  if (values.phone) {
    const validatingPhone = validatePhone({val: values.phone, field: 'phone'});
    if (!validatingPhone.isValid) {
      errors.phone = validatingPhone.error;
    }
  }
  if (values.deliveryMethod === 'courier_delivery') {
    if (values.address) {
      const validatingAddress = validateOnlyRequired({val: values.address, field: 'address'});
      if (!validatingAddress.isValid) {
        errors.address = validatingAddress.error;
      }
    }
    // if (values.checkoutTime) {
    //   const validatingCheckoutTime = validateOnlyRequired({val: values.checkoutTime, field: 'checkoutTime'});
    //   if (!validatingCheckoutTime.isValid) {
    //     errors.checkoutTime = validatingCheckoutTime.error;
    //   }
    // }
  }

  return errors;
}

const validateString = ({val = '', field, isRequired = false}) => {
  let error = '';
  let isValid = true;
  if (!val && isRequired) {
    isValid = false;
    error = `${field} is required`;
  } else if (!isAlphanumeric(val, 'en-US') && !isAlphanumeric(val, 'ru-RU')) {
    isValid = false;
    error = `${field} is invalid`;
  }
  return {
    isValid, error
  };
};

const validatePhone = ({val, field, isRequired = false}) => {
  let error = '';
  let isValid = true;
  if (!val && isRequired) {
    isValid = false;
    error = `${field} is required`;
  } else if (!isMobilePhone(val, ['ru-RU'])) {
    isValid = false;
    error = `${field} is invalid`;
  }
  return {
    isValid, error
  };
};

const validateOnlyRequired = ({val, field}) => {
  let error = '';
  let isValid = true;
  if (!val) {
    isValid = false;
    error = `${field} is required`;
  }
  return {
    isValid, error
  };
};
