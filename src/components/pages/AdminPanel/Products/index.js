import React, {useEffect, useState} from 'react';
import {CircularProgress} from '@material-ui/core';
import TableComponent from '../../../common/TableComponent';
import moment from 'moment';
import {history} from '../../../../redux/history';
import {useDispatch, useSelector} from 'react-redux';
import {getAllProducts, selectShortProductList} from '../../../../redux/modules/products';
import {StatusViewComponent} from '../../../common/StatusComponent';

const AdminProducts = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectShortProductList);
  const getPending = useSelector(state => state.products.pending.productsList);
  // const [product, setAddProduct] = useState();
  // eslint-disable-next-line
  useEffect(() => dispatch(getAllProducts()), []);
  return (
    <div style={{position: 'relative'}}>
      {(getPending) && <CircularProgress
        style={{
          display: 'block',
          position: 'absolute', zIndex: 5,
          transform: 'translate(-50%, -50%)',
          top: '50%', right: '50%'
        }}
      />}
      <TableComponent
        rows={products}
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
            render: StatusViewComponent
          }
        ]}
        actions={[
          {
            icon: 'add',
            tooltip: 'Add Product',
            isFreeAction: true,
            onClick: (event, rowData) => {
              console.log('event', event)
              console.log('rowData', rowData)
            }
          },
          {
            icon: 'edit',
            tooltip: 'Edit Product',
            onClick: (event, rowData) => history.push(`/admin/products/${rowData.productId}`)
          }
        ]}
      />
      {/*{category ? <CategoryEdit open={!!category} onCancel={handleCancelClick} onSubmit={onSubmitCategory} /> : null}*/}
    </div>
  );
};

AdminProducts.propTypes = {};
AdminProducts.defaultProps = {};

export default AdminProducts;
