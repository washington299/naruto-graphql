import Head from 'next/head';
import { Typography, Grid } from '@mui/material';

import { useGetVillages } from 'graphql/getVillages';

import { villagesMock } from 'mocks/villages';

import { Container } from 'components/Container';
import { Card } from 'components/Card';
import { Loading } from 'components/Loading';

export default function Villages() {
	const { loading, data } = useGetVillages();

	return (
		<>
			<Head>
				<title>Naruto - Villages</title>
			</Head>

			<Container>
				<Typography gutterBottom component="h1" variant="h4" textAlign="center">
					Villages
				</Typography>

				{loading ? (
					<Loading />
				) : (
					<Grid container spacing={4}>
						{data?.villages?.results?.map(({ _id, name }) => {
							if (!villagesMock[_id]) return;

							const img = villagesMock[_id]?.img;
							const description = villagesMock[_id]?.description || '';

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
