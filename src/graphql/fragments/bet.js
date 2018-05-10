import gql from 'graphql-tag';

export default gql`
  fragment bet on Bet {
    id
    score {
      home
      away
    }
    penalty
  }
`;
