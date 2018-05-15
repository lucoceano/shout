import React from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Snackbar from 'react-native-snackbar';
import { injectIntl } from 'react-intl';
import Groups from './Groups';

const pollingInterval = 5000;
const groupsQuery = gql`
  query groups {
    groups {
      id
      name
      table {
        team {
          code
          emoji
        }
        points
      }
    }
  }
`;

function GroupsContainer({ intl }) {
  return (
    <Query query={groupsQuery} pollInterval={pollingInterval}>
      {({ loading, data: { groups } = {}, error }) => {
        if (error) {
          Snackbar.show({ title: intl.formatMessage({ id: 'somethingWrong' }) });
        }
        return <Groups loading={loading} groups={groups} />;
      }}
    </Query>
  );
}

GroupsContainer.propTypes = {
  intl: PropTypes.shape({}).isRequired,
};

export default injectIntl(GroupsContainer);
