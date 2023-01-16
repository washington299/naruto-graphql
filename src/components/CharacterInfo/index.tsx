import { SyntheticEvent } from 'react';
import { Box, Typography } from '@mui/material';

import { Character } from 'graphql/__generated__/graphql';

import { DEFAULT_IMG_ERROR } from 'const';

export type CharacterProps = {
	character: Character;
};

export const CharacterInfo = ({ character }: CharacterProps) => {
	const handleImgError = (e: SyntheticEvent<HTMLImageElement, Event>) => {
		e.currentTarget.src = DEFAULT_IMG_ERROR;
	};

	return (
		<Box sx={{ display: { md: 'flex' }, marginTop: 8 }}>
			<img
				src={character?.avatarSrc || DEFAULT_IMG_ERROR}
				alt={character?.name}
				width="100%"
				height={400}
				style={{ maxWidth: 500, minWidth: 300 }}
				onError={handleImgError}
			/>
			<Box sx={{ marginLeft: { md: 4 } }}>
				<Typography
					component="h1"
					variant="h5"
					gutterBottom
					sx={{ textAlign: 'center', marginTop: 1 }}
				>
					{character?.name}
				</Typography>

				<Typography variant="body1" gutterBottom>
					Age:{' '}
					<Typography color="GrayText" component="span">
						{character?.age ? `${character?.age} years old` : 'unknown'}.
					</Typography>
				</Typography>

				<Typography variant="body1" gutterBottom>
					Rank:{' '}
					<Typography color="GrayText" component="span">
						{character?.rank}.
					</Typography>
				</Typography>

				{!!character?.firstAnimeAppearance && (
					<Typography variant="body1" gutterBottom>
						First anime appearance:{' '}
						<Typography color="GrayText" component="span">
							{character?.firstAnimeAppearance}.
						</Typography>
					</Typography>
				)}

				{!!character?.firstMangaAppearance && (
					<Typography variant="body1" gutterBottom>
						First manga appearance:{' '}
						<Typography color="GrayText" component="span">
							{character?.firstMangaAppearance}.
						</Typography>
					</Typography>
				)}

				{!!character?.village && (
					<Typography variant="body1" gutterBottom>
						Village:{' '}
						<Typography color="GrayText" component="span">
							{character?.village}.
						</Typography>
					</Typography>
				)}

				{!!character?.description && (
					<Typography variant="body1" gutterBottom>
						Description:{' '}
						<Typography color="GrayText" component="span">
							{character?.description}
						</Typography>
					</Typography>
				)}
			</Box>
		</Box>
	);
};
