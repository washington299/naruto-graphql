import Head from 'next/head';
import { Typography, Grid } from '@mui/material';

import { useGetVillages } from 'graphql/getVillages';

import { Container } from 'components/Container';
import { Card } from 'components/Card';
import { Loading } from 'components/Loading';

export default function Villages() {
	const { loading, data } = useGetVillages();

	console.log(data);

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
						{data?.villages?.results?.map(({ _id, name }) => (
							<Grid key={_id} item xs={12} md={6} lg={4}>
								<Card
									src="/assets/images/cloud-village.png"
									name={name}
									description="Mollit nostrud laboris nisi tempor consequat laborum aliquip consequat labore nisi ullamco. Esse laborum do labore proident adipisicing laborum ut adipisicing occaecat consequat velit. Esse labore eiusmod consequat nulla aliquip. Esse aliqua minim magna fugiat culpa."
								/>
							</Grid>
						))}
					</Grid>
				)}
			</Container>
		</>
	);
}
