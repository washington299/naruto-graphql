import { SyntheticEvent, useState } from 'react';
import Link from 'next/link';
import { Card, CardContent, Typography, Skeleton } from '@mui/material';

import { DEFAULT_IMG_ERROR } from 'const';

type CharacterCardProps = {
	id: string;
	avatarSrc: string | null | undefined;
	name: string;
	age: number | null | undefined;
	rank: string | null | undefined;
};

export const CharacterCard = ({ id, avatarSrc, name, age, rank }: CharacterCardProps) => {
	const [loadingImg, setLoadingImg] = useState(true);

	const handleImgError = (e: SyntheticEvent<HTMLImageElement, Event>) => {
		e.currentTarget.src = DEFAULT_IMG_ERROR;
	};

	return (
		<Card
			sx={{
				cursor: 'pointer',
				transition: 'transform 0.4s',
				transform: { xs: 'scale(1)', lg: 'scale(0.9)' },
				':hover': { lg: { transform: 'scale(1)' } },
			}}
		>
			<Link href={`/characters/${id}`} style={{ textDecoration: 'none' }}>
				{loadingImg && <Skeleton variant="rectangular" width="100%" height={300} />}
				<img
					src={avatarSrc || DEFAULT_IMG_ERROR}
					title={`Character - ${name}`}
					onError={handleImgError}
					style={{ width: '100%', height: loadingImg ? 0 : 300 }}
					onLoad={() => setLoadingImg(false)}
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

					<Typography
						gutterBottom
						variant="subtitle1"
						sx={{ color: 'black', fontWeight: 'normal' }}
					>
						Age: {age ? `${age} years old` : 'unknown'}
					</Typography>

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
