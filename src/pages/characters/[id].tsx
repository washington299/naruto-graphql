import { SyntheticEvent } from 'react';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { Box, CircularProgress, Typography } from '@mui/material';

import { client } from 'graphql/client';
import { GET_CHARACTER } from 'graphql/getCharacter';
import { Character } from 'graphql/__generated__/graphql';

import { DEFAULT_IMG_ERROR } from 'const';

import { Container } from 'components/Container';

type CharacterProps = {
	character: Character;
};

const Page = ({ character }: CharacterProps) => {
	const {
		name,
		avatarSrc,
		age,
		firstAnimeAppearance,
		firstMangaAppearance,
		description,
		rank,
		village,
	} = character;

	const { isFallback } = useRouter();

	const title = `Character - ${name}`;

	const handleImgError = (e: SyntheticEvent<HTMLImageElement, Event>) => {
		e.currentTarget.src = DEFAULT_IMG_ERROR;
	};

	if (isFallback) {
		return (
			<Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 12 }}>
				<CircularProgress />
			</Box>
		);
	}

	return (
		<>
			<Head>
				<title>{title}</title>
			</Head>

			<Container>
				<Box sx={{ display: { md: 'flex' } }}>
					<img
						src={avatarSrc || DEFAULT_IMG_ERROR}
						alt={name}
						width="100%"
						height={400}
						style={{ maxWidth: 800, minWidth: 320 }}
						onError={handleImgError}
					/>
					<Box sx={{ marginLeft: { md: 4 } }}>
						<Typography
							component="h1"
							variant="h5"
							gutterBottom
							sx={{ textAlign: 'center', marginTop: 1 }}
						>
							{name}
						</Typography>

						<Typography variant="body1" gutterBottom>
							Age:{' '}
							<Typography color="GrayText" component="span">
								{age ? `${age} years old` : 'unknown'}.
							</Typography>
						</Typography>

						<Typography variant="body1" gutterBottom>
							Rank:{' '}
							<Typography color="GrayText" component="span">
								{rank}.
							</Typography>
						</Typography>

						{!!firstAnimeAppearance && (
							<Typography variant="body1" gutterBottom>
								First anime appearance:{' '}
								<Typography color="GrayText" component="span">
									{firstAnimeAppearance}.
								</Typography>
							</Typography>
						)}

						{!!firstMangaAppearance && (
							<Typography variant="body1" gutterBottom>
								First manga appearance:{' '}
								<Typography color="GrayText" component="span">
									{firstMangaAppearance}.
								</Typography>
							</Typography>
						)}

						{!!village && (
							<Typography variant="body1" gutterBottom>
								Village:{' '}
								<Typography color="GrayText" component="span">
									{village}.
								</Typography>
							</Typography>
						)}

						{!!description && (
							<Typography variant="body1" gutterBottom>
								Description:{' '}
								<Typography color="GrayText" component="span">
									{description}
								</Typography>
							</Typography>
						)}
					</Box>
				</Box>
			</Container>
		</>
	);
};

export const getStaticPaths: GetStaticPaths = () => {
	return {
		paths: [],
		fallback: true,
	};
};

export const getStaticProps: GetStaticProps = async (ctx: GetStaticPropsContext) => {
	const { data } = await client.query({
		query: GET_CHARACTER,
		variables: { id: ctx.params?.id as string },
	});

	return {
		revalidate: 60, // One minute
		props: {
			character: data.character,
		},
	};
};

export default Page;
