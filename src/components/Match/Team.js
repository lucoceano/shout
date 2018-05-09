import PropTypes from 'prop-types';

export default function Team({ team, children }) {
  return children(team);
}

Team.propTypes = {
  team: PropTypes.shape({}).isRequired,
  children: PropTypes.func,
};

Team.defaultProps = {
  children: () => {},
};
