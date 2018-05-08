import PropTypes from 'prop-types';

export default function MatchTeam({ team, children }) {
  return children(team);
}

MatchTeam.propTypes = {
  team: PropTypes.shape({}).isRequired,
  children: PropTypes.func,
};

MatchTeam.defaultProps = {
  children: () => {},
};
