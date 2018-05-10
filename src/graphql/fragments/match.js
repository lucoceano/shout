import gql from 'graphql-tag';

export default gql`
  fragment match on Match {
    id
    date
    number
    location
    teams {
      home {
        code
        emoji
      }
      away {
        code
        emoji
      }
    }
    score {
      home
      away
    }
  }
`;
