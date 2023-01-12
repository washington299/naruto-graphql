import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ApolloProvider } from '@apollo/client';
import { GlobalStyles } from '@mui/material';

import { client } from 'graphql/client';

import { Layout } from 'components/Layout';

import { globalStyles } from 'styles/globalStyles';

export default function App({ Component, pageProps }: AppProps) {
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
