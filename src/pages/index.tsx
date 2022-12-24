import Head from 'next/head';

import { Header } from 'components/Header';
import { HomeCards } from 'components/HomeCards';

export default function Home() {
	return (
		<>
			<Head>
				<title>Naruto - Home</title>
			</Head>
			<Header />

			<HomeCards />
		</>
	);
}
