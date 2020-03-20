import React from 'react';
import TableComponent from '../../common/TableComponent';

const Category = () => {
  return (
    <TableComponent
      rows={[
        {name: 'Mehmet'}
      ]}
      columns={[
        {title: 'Name', field: 'name'}
      ]}
    />
  );
};

export default Category;
