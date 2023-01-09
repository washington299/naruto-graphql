import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { GlobalStyles } from '@mui/material';

import { Layout } from 'components/Layout';

import { globalStyles } from 'styles/globalStyles';

export default function App({ Component, pageProps }: AppProps) {
	const client = new ApolloClient({
		uri: 'https://narutoql.up.railway.app/graphql',
		cache: new InMemoryCache(),
	});

	return (
		<>
			<Head>
				<meta name="viewport" content="initial-scale=1, width=device-width" />
			</Head>

			<ApolloProvider client={client}>
				<GlobalStyles styles={globalStyles} />

				<Layout>
					<Component {...pageProps} />
				</Layout>
			</ApolloProvider>
		</>
	);
}
