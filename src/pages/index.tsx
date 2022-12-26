import Head from 'next/head';

import { HomeCards } from 'components/HomeCards';

export default function Home() {
	return (
		<>
			<Head>
				<title>Naruto - Home</title>
			</Head>

			<HomeCards />
		</>
	);
}
