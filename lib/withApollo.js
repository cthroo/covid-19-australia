import {ApolloClient} from 'apollo-client';
import {InMemoryCache} from 'apollo-cache-inmemory';
import withApollo from 'next-with-apollo';
import {createHttpLink} from 'apollo-link-http';
import fetch from 'isomorphic-unfetch';

const link = createHttpLink({
  fetch,
  uri: process.env.GRAPHQL_URI,
});

const cache = new InMemoryCache();

export default withApollo(
  ({initialState}) =>
    new ApolloClient({
      link: link,
      cache,
    }),
  {},
);
