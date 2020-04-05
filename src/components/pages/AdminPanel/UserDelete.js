import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import { DialogContentText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
      },
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
  }));

export default function UserDelete ({user, onCancel, onSubmit}) {
    const classes = useStyles();

    const handleDelete = (event) => {
        event.preventDefault();
        onSubmit(user);
    }

    return (
        <Dialog open={!!user} onClose={onCancel} aria-labelledby="form-dialog-title" className={classes.root}>
          <DialogTitle id="form-dialog-title">User: {user.username}</DialogTitle>
          <DialogContent>
              <DialogContentText>Are you sure you want to delete this user?</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={onCancel} color="primary">
              Cancel
            </Button>
            <Button onClick={handleDelete} color="secondary">
              DELETE
            </Button>
          </DialogActions>
        </Dialog>  
    );
}

UserDelete.propTypes = {
    user: PropTypes.shape({
        username: PropTypes.string.isRequired
    }),
    onCancel: PropTypes.func,
    onSubmit: PropTypes.func
};

UserDelete.defaultProps = {};