import Head from 'next/head';
import { Typography, Grid } from '@mui/material';

import { useGetClans } from 'graphql/getClans';

import { clansMock } from 'mocks/clans';

import { Container } from 'components/Container';
import { Loading } from 'components/Loading';
import { Card } from 'components/Card';

export default function Villages() {
	const { loading, data } = useGetClans();

	return (
		<>
			<Head>
				<title>Naruto - Clans</title>
			</Head>

			<Container>
				<Typography gutterBottom component="h1" variant="h4" textAlign="center">
					Clans
				</Typography>

				{loading ? (
					<Loading />
				) : (
					<Grid container spacing={4}>
						{data?.clans?.results?.map(({ _id, name }) => {
							if (!clansMock[_id]) return;

							const img = clansMock[_id]?.img;
							const description = clansMock[_id]?.description || '';

							return (
								<Grid key={_id} item xs={12} md={6} lg={4}>
									<Card src={img} name={name} description={description} />
								</Grid>
							);
						})}
					</Grid>
				)}
			</Container>
		</>
	);
}
