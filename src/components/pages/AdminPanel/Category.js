import React, {useEffect} from 'react';
import TableComponent from '../../common/TableComponent';
import {useDispatch, useSelector} from 'react-redux';
import {editCategory, getAllCategories, removeCategory} from '../../../redux/modules/categories';
import {Checkbox, CircularProgress} from '@material-ui/core';
import moment from 'moment';

const Category = () => {
  const dispatch = useDispatch();
  const categories = useSelector(state => state.categories.list);
  const getPending = useSelector(state => state.categories.categoryListPending);
  const editPending = useSelector(state => state.categories.editCategoryPending);
  useEffect(() => {
    dispatch(getAllCategories());
  }, []);

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
            render: ({status}) =>
              <Checkbox
                color="primary"
                checked={status}
              />,
            editComponent: props => (
              <Checkbox
                color="primary"
                checked={!!props.rowData.status}
                onChange={e => props.onChange(e.target.checked)}
              />
            )
          }
        ]}
        editable={{
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve) => {
              dispatch(editCategory(newData, resolve));
            }),
          onRowDelete: oldData =>
            new Promise((resolve, reject) => {
              dispatch(removeCategory(oldData.id, resolve));
            })
        }}
        actions={[
          {
            icon: 'add',
            tooltip: 'Add User',
            isFreeAction: true,
            onClick: (event) => alert('You want to add a new row')
          }
        ]}
      />
    </div>
  );
};

export default Category;
