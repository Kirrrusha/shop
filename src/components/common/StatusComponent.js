import {Checkbox} from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';

export const StatusEditComponent = ({rowData, onChange}) => (
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

export const StatusViewComponent = ({status}) =>
  <Checkbox
    color="primary"
    name="visible"
    checked={status}
  />;

StatusViewComponent.propTypes = {
  status: PropTypes.bool.isRequired
}
