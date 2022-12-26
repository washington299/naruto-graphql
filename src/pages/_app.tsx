import type { AppProps } from 'next/app';
import Head from 'next/head';
import { GlobalStyles } from '@mui/material';

import { Layout } from 'components/Layout';

import { globalStyles } from 'styles/globalStyles';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<meta name="viewport" content="initial-scale=1, width=device-width" />
			</Head>

			<GlobalStyles styles={globalStyles} />

			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	);
}
