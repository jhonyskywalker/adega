import {
  gql,
} from 'apollo-boost';

import gqlClient from './gqlClient';

const query = gql`
  query allCategoriesSearch {
    allCategory {
      title
      id
    }
  }
`;

const get = () => (
  gqlClient.query({ query })
);

export default {
  get,
};
