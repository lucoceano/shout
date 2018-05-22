import React from 'react';
import PropTypes from 'prop-types';
import { ListView } from '@shoutem/ui';
import Group from './Group';

function Groups({ groups, loading }) {
  return <ListView data={groups} loading={loading} renderRow={group => <Group group={group} />} />;
}

Groups.propTypes = {
  loading: PropTypes.bool.isRequired,
  groups: PropTypes.arrayOf(PropTypes.shape({}).isRequired),
};

Groups.defaultProps = {
  groups: [],
};

export default Groups;
