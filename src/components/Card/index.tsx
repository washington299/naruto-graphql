import { useState } from 'react';
import {
	Card as MUICard,
	CardMedia,
	CardContent,
	CardActions,
	Typography,
	Box,
	Link,
} from '@mui/material';

type CardProps = {
	name: string;
	description: string;
	src: string;
	button?: JSX.Element;
};

export const Card = ({ src, name, description, button }: CardProps) => {
	const [showMore, setShowMore] = useState(false);

	const descriptionText = `${description.substring(0, showMore ? description.length : 200)}${
		!showMore ? '...' : ''
	}`;

	const toggleShowMoreCard = () => setShowMore((previous) => !previous);

	return (
		<MUICard>
			<CardMedia image={src} title={`Naruto - ${name}`} sx={{ width: '100%', height: 300 }} />
			<CardContent>
				<Typography gutterBottom variant="h5" component="h5">
					{name}
				</Typography>
				<Typography
					gutterBottom
					variant="body2"
					color="text.secondary"
					sx={{ opacity: !showMore ? 0.6 : 1 }}
				>
					{descriptionText}
				</Typography>
				<Box sx={{ display: 'flex', justifyContent: 'center' }}>
					<Link underline="hover" sx={{ cursor: 'pointer' }} onClick={toggleShowMoreCard}>
						<Typography>{showMore ? 'Show less' : 'Show more'}</Typography>
					</Link>
				</Box>

				{!!button && <CardActions sx={{ marginTop: 2 }}>{button}</CardActions>}
			</CardContent>
		</MUICard>
	);
};
