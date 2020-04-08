import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import TableComponent from '../../../common/TableComponent';
import {useDispatch, useSelector} from 'react-redux';
import {addCategory, editCategory, getAllCategories, removeCategory} from '../../../../redux/modules/categories';
import {Checkbox, CircularProgress} from '@material-ui/core';
import moment from 'moment';
import CategoryEdit from './CreateCategory';

const Category = () => {
  const dispatch = useDispatch();
  const categories = useSelector(state => state.categories.list);
  const getPending = useSelector(state => state.categories.categoryListPending);
  const editPending = useSelector(state => state.categories.editCategoryPending);
  const [addUser, setAddUser] = useState();
  useEffect(dispatch(getAllCategories()), []);

  const onOpenModal = (category) => setAddUser(category);

  const handleCancelClick = () => setAddUser();

  const onSubmitCategory = (category) => {
    setAddUser()
    dispatch(addCategory(category));
  }

  return (
    <div style={{position: 'relative'}}>
      {(getPending || editPending) && <CircularProgress
        style={{
          display: 'block',
          position: 'absolute', zIndex: 5,
          transform: 'translate(-50%, -50%)',
          top: '50%', right: '50%'
        }}
      />}
      <TableComponent
        rows={categories}
        options={{
          paging: false
        }}
        columns={[
          {title: 'Name', field: 'name'},
          {
            title: 'Updated date', field: 'updatedAt', editable: 'never',
            render: ({updatedAt}) => moment(updatedAt).format('DD.MM.YYYY hh:mm')
          },
          {
            title: 'Status', field: 'status',
            render: StatusViewComponent,
            editComponent: StatusEditComponent
          }
        ]}
        editable={{
          onRowUpdate: (newData) =>
            new Promise((resolve) => {
              dispatch(editCategory(newData, resolve));
            }),
          onRowDelete: oldData =>
            new Promise((resolve) => {
              dispatch(removeCategory(oldData.id, resolve));
            })
        }}
        actions={[
          {
            icon: 'add',
            tooltip: 'Add User',
            isFreeAction: true,
            onClick: onOpenModal
          }
        ]}
      />
      {addUser ? <CategoryEdit open={!!addUser} onCancel={handleCancelClick} onSubmit={onSubmitCategory} /> : null}
    </div>
  );
};

export default Category;

const StatusEditComponent = ({rowData, onChange}) => (
  <Checkbox
    name="change"
    color="primary"
    checked={!!rowData.status}
    onChange={e => onChange(e.target.checked)}
  />
);

StatusEditComponent.propTypes = {
  rowData: PropTypes.shape({
    status: PropTypes.bool.isRequired
  }),
  onChange: PropTypes.func.isRequired
}

const StatusViewComponent = ({status}) =>
  <Checkbox
    color="primary"
    name="visible"
    checked={status}
  />;

StatusViewComponent.propTypes = {
  status: PropTypes.bool.isRequired
}
