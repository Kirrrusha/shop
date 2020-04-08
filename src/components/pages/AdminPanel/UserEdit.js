import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { FormGroup, InputLabel } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

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

export default function UserEdit ({user, onCancel, onSubmit}) {
    const classes = useStyles();
    const [editingUser, setEditingUser] = useState({...user})

    const handleChange = (event) => {
        const {id, value} = event.target;
        setEditingUser({
            ...editingUser,
            [id]: value
        });
    }

    const handleUpdate = (event) => {
        event.preventDefault();
        onSubmit(editingUser);
    }

    return (
        <Dialog open={!!user} onClose={onCancel} aria-labelledby="form-dialog-title" className={classes.root}>
          <DialogTitle id="form-dialog-title">User: {editingUser.username}</DialogTitle>
          <DialogContent>
            <FormGroup noValidate autoComplete="off">
              <TextField
                autoFocus
                variant="outlined"
                id="username"
                label="Username"
                type="text"
                value={editingUser.username}
                onChange={handleChange}
                fullWidth
              />
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="role-label">Role</InputLabel>
                <Select
                  labelId="role-label"
                  id="role"
                  value={editingUser.role}
                  onChange={handleChange}
                  label="Role"
                >
                  <MenuItem value={'basic'}><em>basic</em></MenuItem>
                  <MenuItem value={'supervisor'}>supervisor</MenuItem>
                </Select>
              </FormControl>
              <TextField
                variant="outlined"
                id="email"
                label="Email"
                type="email"
                value={editingUser.email}
                onChange={handleChange}
                fullWidth
              />
              <TextField
                variant="outlined"
                id="name"
                label="Name"
                type="text"
                value={editingUser.name}
                onChange={handleChange}
                fullWidth
              />
              <TextField
                variant="outlined"
                id="surname"
                label="Surname"
                type="text"
                value={editingUser.surname}
                onChange={handleChange}
                fullWidth
              />
              <TextField
                variant="outlined"
                id="middleName"
                label="Middle Name"
                type="text"
                value={editingUser.middleName}
                onChange={handleChange}
                fullWidth
              />
            </FormGroup>
          </DialogContent>
          <DialogActions>
            <Button onClick={onCancel} color="primary">
              Cancel
            </Button>
            <Button onClick={handleUpdate} color="primary">
              Update
            </Button>
          </DialogActions>
        </Dialog>  
    );
}

UserEdit.propTypes = {
    user: PropTypes.shape({
        username: PropTypes.string.isRequired,
        role: PropTypes.oneOf(['basic', 'supervisor']).isRequired,
        email: PropTypes.string.isRequired,
        name: PropTypes.string,
        surname: PropTypes.string,
        middleName: PropTypes.string
    }),
    onCancel: PropTypes.func,
    onSubmit: PropTypes.func
};

UserEdit.defaultProps = {};