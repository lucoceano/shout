import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment-timezone';
import { FormattedDate } from 'react-intl';
import { ListView, Divider, Caption } from '@shoutem/ui';
import MatchRow from './MatchRow';

export default function Matches({ loading, matches, onItemClick }) {
  return (
    <ListView
      data={matches}
      loading={loading}
      renderSectionHeader={sectionDate => (
        <Divider styleName="section-header">
          <Caption>
            <FormattedDate
              value={new Date(sectionDate)}
              year="numeric"
              month="long"
              day="2-digit"
            />
          </Caption>
        </Divider>
      )}
      getSectionId={match => moment(match.date).format('YYYY-MM-DDT12:00:00')}
      renderRow={match => <MatchRow match={match} onClick={onItemClick} />}
    />
  );
}

Matches.propTypes = {
  loading: PropTypes.bool.isRequired,
  onItemClick: PropTypes.func.isRequired,
  matches: PropTypes.arrayOf(PropTypes.object),
};

Matches.defaultProps = {
  matches: [],
};
