import React, {useEffect, useState} from 'react';
import TableComponent from '../../common/TableComponent';
import {useDispatch, useSelector} from 'react-redux';
import {getAllUsers, updateUser} from '../../../redux/modules/users'; 
import UserEdit from './UserEdit';

export default function User() {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users.list);
  const [editingUser, setEditingUser] = useState();

  useEffect(() => {
      dispatch(getAllUsers());
  }, []);

  const handleEdit = ((event, user) => {
    event.preventDefault();
    setEditingUser(user);
  })

  const handleCancel = (event => {
    event.preventDefault();
    setEditingUser()
  })

  const handleUpdate = ((updatedUser) => {
    console.log('UPDATED: ', updatedUser)
    //setEditingUser() temporary broken
    dispatch(updateUser(updatedUser));
  })

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
          {icon: 'edit', tooltip: 'Edit user', onClick: handleEdit}
        ]}
      />
      {editingUser ? <UserEdit user={editingUser} onCancel={handleCancel} onSubmit={handleUpdate}/> : null}
    </div>
  );
}


User.propTypes = {};
User.defaultProps = {};


