import type { AppProps } from 'next/app';
import { GlobalStyles } from '@mui/material';

import { globalStyles } from 'styles/globalStyles';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<GlobalStyles styles={globalStyles} />
			<Component {...pageProps} />
		</>
	);
}
