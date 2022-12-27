import { useState } from 'react';
import NextLink from 'next/link';
import {
	Grid,
	Card,
	CardMedia,
	CardContent,
	CardActions,
	Typography,
	Box,
	Button,
	Link,
} from '@mui/material';

import { Container } from 'components/Container';

import { homeCardsMock } from './mock';

export const HomeCards = () => {
	const [showMoreCard, setShowMoreCard] = useState<{ [key: string]: boolean }>({
		Characters: false,
		Villages: false,
		Clans: false,
	});

	const toggleShowMoreCard = (name: string) =>
		setShowMoreCard((previousState) => ({
			...previousState,
			[name]: !previousState[name],
		}));

	return (
		<Container>
			<Grid container spacing={4}>
				{homeCardsMock.map(({ src, name, description }) => {
					const isShowMoreActive = showMoreCard[name];
					const descriptionText = `${description.substring(
						0,
						isShowMoreActive ? description.length : 200
					)}${!isShowMoreActive ? '...' : ''}`;

					return (
						<Grid key={name} item xs={12} md={6} lg={4}>
							<Card>
								<CardMedia
									image={src}
									title={`Naruto - ${name}`}
									sx={{ width: '100%', height: 300 }}
								/>
								<CardContent>
									<Typography gutterBottom variant="h5" component="h5">
										{name}
									</Typography>
									<Typography
										gutterBottom
										variant="body2"
										color="text.secondary"
										sx={{ opacity: !isShowMoreActive ? 0.6 : 1 }}
									>
										{descriptionText}
									</Typography>
									<Box sx={{ display: 'flex', justifyContent: 'center' }}>
										<Link
											underline="hover"
											sx={{ cursor: 'pointer' }}
											onClick={() => toggleShowMoreCard(name)}
										>
											<Typography>{isShowMoreActive ? 'Show less' : 'Show more'}</Typography>
										</Link>
									</Box>

									<CardActions sx={{ marginTop: 2 }}>
										<Button
											LinkComponent={NextLink}
											href={`/${name.toLocaleLowerCase()}`}
											variant="contained"
											sx={{ width: '100%' }}
										>
											{`See ${name} page`}
										</Button>
									</CardActions>
								</CardContent>
							</Card>
						</Grid>
					);
				})}
			</Grid>
		</Container>
	);
};
