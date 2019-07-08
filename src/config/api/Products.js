import {
  gql,
} from 'apollo-boost';

import gqlClient from './gqlClient';

const query = gql`
  query pocCategorySearch($id: ID!, $search: String!, $categoryId: Int!) {
    poc(id: $id) {
      products(categoryId: $categoryId, search: $search) {
        productVariants {
          title
          description
          imageUrl
          price
        }
      }
    }
  }
`;

const get = ({ variables }) => (
  gqlClient.query({
    query,
    variables,
  })
);

export default {
  get,
};
