import React, {useEffect, useState} from 'react';
import TableComponent from '../../common/TableComponent';
import {useDispatch, useSelector} from 'react-redux';
import {getAllUsers, updateUser, deleteUser} from '../../../redux/modules/users';
import UserEdit from './UserEdit';
import UserDelete from './UserDelete'

export default function User() {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users.list);
  const [editingUser, setEditingUser] = useState();
  const [deletingUser, setDeletingUser] = useState();

  useEffect(() => {
      dispatch(getAllUsers());
  }, [dispatch]);

  const handleEditClick = (event, user) => {
    event.preventDefault();
    setEditingUser(user);
  }

  const handleDeleteClick = (event, user) => {
    event.preventDefault();
    setDeletingUser(user)
  }

  const handleCancelClick = (event => {
    event.preventDefault();
    setEditingUser()
    setDeletingUser()
  })

  const handleUserUpdate = (updatedUser) => {
    setEditingUser()
    dispatch(updateUser(updatedUser));
  }

  const handleUserDelete = (deletedUser) => {
    setDeletingUser()
    dispatch(deleteUser(deletedUser))
  }


  return (
    <div>
      <TableComponent
        rows={users}
        columns={[
          {title: 'Username', field: 'username'},
          {title: 'Role', field: 'role'},
          {title: 'Email', field: 'email'},
          {title: 'Name', field: 'name'},
          {title: 'Surname', field: 'surname'},
          {title: 'Middle Name', field: 'middleName'}
        ]}
        actions={[
          {icon: 'edit', tooltip: 'Edit user', onClick: handleEditClick},
          {icon: 'delete', tooltip: 'Delete user', onClick: handleDeleteClick}
        ]}
      />
      {editingUser ? <UserEdit user={editingUser} onCancel={handleCancelClick} onSubmit={handleUserUpdate}/> : null}
      {deletingUser ? <UserDelete user={deletingUser} onCancel={handleCancelClick} onSubmit={handleUserDelete}/> : null}
    </div>
  );
}


User.propTypes = {};
User.defaultProps = {};


