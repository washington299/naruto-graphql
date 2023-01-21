import NextLink from 'next/link';
import { Grid, Button } from '@mui/material';

import { Container } from 'components/Container';
import { Card } from 'components/Card';

import { homeCardsData } from './homeCardsData';

export const HomeCards = () => {
	return (
		<Container>
			<Grid container spacing={4}>
				{homeCardsData.map(({ src, name, description }) => {
					const button = (
						<Button
							LinkComponent={NextLink}
							href={`/${name.toLocaleLowerCase()}`}
							variant="contained"
							sx={{ width: '100%' }}
						>
							{`See ${name} page`}
						</Button>
					);

					return (
						<Grid key={name} item xs={12} md={6} lg={4}>
							<Card src={src} name={name} description={description} button={button} />
						</Grid>
					);
				})}
			</Grid>
		</Container>
	);
};
