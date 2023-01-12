import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
	uri: 'https://narutoql.up.railway.app/graphql',
	cache: new InMemoryCache(),
});
