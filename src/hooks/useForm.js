import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const useForm = (callback, validate) => {

  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
    // eslint-disable-next-line
  }, [errors]);

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  const handleChange = (event) => {
    event.persist();
    setValues(values => ({ ...values, [event.target.name]: event.target.value || event.target.checked }));
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
