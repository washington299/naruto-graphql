import Head from 'next/head';
import { Typography, Grid } from '@mui/material';

import { Container } from 'components/Container';
import { Card } from 'components/Card';

export default function Villages() {
	return (
		<>
			<Head>
				<title>Naruto - Villages</title>
			</Head>

			<Container>
				<Typography gutterBottom component="h1" variant="h4" textAlign="center">
					Villages
				</Typography>

				<Grid container spacing={4}>
					<Grid item xs={12} md={6} lg={4}>
						<Card
							src="/assets/images/cloud-village.png"
							name="Cloud Village"
							description="Mollit nostrud laboris nisi tempor consequat laborum aliquip consequat labore nisi ullamco. Esse laborum do labore proident adipisicing laborum ut adipisicing occaecat consequat velit. Esse labore eiusmod consequat nulla aliquip. Esse aliqua minim magna fugiat culpa."
						/>
					</Grid>
				</Grid>
			</Container>
		</>
	);
}
