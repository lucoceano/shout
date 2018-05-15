import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Snackbar from 'react-native-snackbar';
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

function GroupsContainer() {
  return (
    <Query query={groupsQuery} pollInterval={pollingInterval}>
      {({ loading, data: { groups } = {}, error }) => {
        if (error) {
          Snackbar.show({ title: 'Ocorreu um erro.' });
        }
        return <Groups loading={loading} groups={groups} />;
      }}
    </Query>
  );
}

export default GroupsContainer;
