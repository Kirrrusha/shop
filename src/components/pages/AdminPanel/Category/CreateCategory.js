import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import {Checkbox} from '@material-ui/core';
import Modal from '../../../common/Modal';
import validate from './validate';
import useForm from '../../../../hooks/useForm';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left'
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    textAlign: 'left'
  }
}));

export default function CreateCategory({open, onCancel, onSubmit}) {
  const classes = useStyles();
  const login = () => onSubmit(values);

  const {
    values,
    errors,
    handleChange,
    handleSubmit
  } = useForm(login, validate);

  return (
    <Modal
      onSubmit={handleSubmit}
      onCancel={onCancel}
      open={open}
      title="Create category">
      <form noValidate className={classes.root}>
        <TextField
          variant="outlined"
          id="name"
          name="name"
          label="Name"
          type="text"
          error={!!errors.name}
          helperText={errors.name}
          value={values.name || ''}
          onChange={handleChange}
          fullWidth
        />
        <FormControl variant="outlined" className={classes.formControl}>
          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                name="status"
                checked={!!values.status}
                onChange={handleChange}
              />
            }
            label="Status"
          />
          <FormHelperText>{errors.status}</FormHelperText>
        </FormControl>
      </form>
    </Modal>
  );
}

CreateCategory.propTypes = {
    open: PropTypes.bool,
    onCancel: PropTypes.func,
    onSubmit: PropTypes.func
};
