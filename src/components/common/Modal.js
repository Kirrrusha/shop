import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import {makeStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
    width: (props) => props.width,
  },
}));

const Modal = (props) => {
  const classes = useStyles();
  const {open, title, onCancel, onSubmit, children} = props;

  return (
    <div>
      <Dialog open={open} onClose={onCancel} aria-labelledby="form-dialog-title" className={classes.root}>
        <DialogTitle id="form-dialog-title">{title}</DialogTitle>
        <DialogContent>
          {children}
        </DialogContent>
        <DialogActions>
          <Button onClick={onCancel} color="primary">
            Cancel
          </Button>
          <Button onClick={onSubmit} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

Modal.propTypes = {
  title: PropTypes.string,
  open: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  width: PropTypes.number
};

Modal.defaultProps = {
  width: 200
}

export default Modal;
