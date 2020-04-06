import React, {useEffect} from 'react';
import TableComponent from '../../common/TableComponent';
import {useDispatch, useSelector} from 'react-redux';
import {editCategory, getCategories} from '../../../redux/modules/categories';
import {Checkbox} from '@material-ui/core';
import moment from 'moment';

const Category = () => {
  const dispatch = useDispatch();
  const categories = useSelector(state => state.categories.list);
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const onEditCategory = (event, category) => {
    event.preventDefault();
    debugger
    editCategory(category);
  }

  return (
    <TableComponent
      rows={categories}
      columns={[
        {title: 'Name', field: 'name'},
        {title: 'Updated date', field: 'updatedAt',
        render: ({ updatedAt}) => moment(updatedAt).format('DD.MM.YYYY hh:mm')},
        {
          title: 'Status', field: 'status',
          render: ({status}) =>
            <Checkbox
              color="primary"
              checked={status}
            />
        }
      ]}
      actions={[
        {icon: 'edit', tooltip: 'Edit user', onClick: onEditCategory},
        // {icon: 'delete', tooltip: 'Delete user', onClick: handleDeleteClick}
      ]}
    />
  );
};

export default Category;
