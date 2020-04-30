import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {isEmpty} from 'lodash';

const useForm = (initialValues, callback, validate) => {

  const [values, setValues] = useState(initialValues || {});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
    // eslint-disable-next-line
  }, [errors]);

  useEffect(() => {
    !isEmpty(values) && setErrors(validate(values));
    // eslint-disable-next-line
  }, [values]);

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  const handleChange = (event) => {
    event.persist();
    setValues(values => ({ ...values, [event.target.name]: event.target.value || event.target.checked || '' }));
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  }
};

useForm.propTypes = {
  callback: PropTypes.func.isRequired,
  validate: PropTypes.func.isRequired,
};

export default useForm;
