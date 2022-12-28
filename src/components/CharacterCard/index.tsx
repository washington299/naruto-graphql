import Link from 'next/link';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

type CharacterCardProps = {
	id: string;
	avatarSrc: string;
	name: string;
	age?: number | null;
	rank: string;
};

export const CharacterCard = ({ id, avatarSrc, name, age, rank }: CharacterCardProps) => {
	return (
		<Card
			sx={{
				cursor: 'pointer',
				transition: 'transform 0.4s',
				transform: { xs: 'scale(1)', lg: 'scale(0.9)' },
				':hover': { lg: { transform: 'scale(1)' } },
			}}
		>
			<Link href={`/character/${id}`} style={{ textDecoration: 'none' }}>
				<CardMedia
					image={avatarSrc}
					title={`Character - ${name}`}
					sx={{ width: '100%', height: 300 }}
				/>
				<CardContent>
					<Typography
						gutterBottom
						variant="h5"
						component="h5"
						sx={{ textAlign: 'center', color: 'black' }}
					>
						{name}
					</Typography>
					{!!age && (
						<Typography
							gutterBottom
							variant="subtitle1"
							sx={{ color: 'black', fontWeight: 'normal' }}
						>
							Age: {age} years old
						</Typography>
					)}
					{!!rank && (
						<Typography
							gutterBottom
							variant="subtitle1"
							sx={{ color: 'black', fontWeight: 'normal' }}
						>
							Rank: {rank}
						</Typography>
					)}
				</CardContent>
			</Link>
		</Card>
	);
};
