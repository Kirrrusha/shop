import React from 'react';
import MaterialTable from 'material-table';
import PropTypes from 'prop-types'

export default function TableComponent(props) {
  return (
    <MaterialTable
      title={props.title || ''}
      columns={props.columns}
      data={props.rows}
      actions={props.actions}
      editable={props.editable}
      options={{
        actionsColumnIndex: -1
      }}
    />
  );
}

TableComponent.propTypes = {
  title: PropTypes.string,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      field: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      render: PropTypes.func
    }).isRequired
  ),
  rows: PropTypes.arrayOf(PropTypes.object).isRequired,
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      tooltip: PropTypes.string.isRequired,
      onClick: PropTypes.func
    })
  ),
  editable: PropTypes.shape({
    onRowAdd: PropTypes.func,
    onRowUpdate: PropTypes.func,
    onRowDelete: PropTypes.func
  })
};
