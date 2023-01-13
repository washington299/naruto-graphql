import { SyntheticEvent } from 'react';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { Box, CircularProgress, Typography } from '@mui/material';

import { client } from 'graphql/client';
import { GET_CHARACTER } from 'graphql/getCharacter';
import { GET_CHARACTERS } from 'graphql/getCharacters';
import { Character } from 'graphql/__generated__/graphql';

import { DEFAULT_IMG_ERROR } from 'const';

import { Container } from 'components/Container';

type CharacterProps = {
	character: Character;
};

const Page = ({ character }: CharacterProps) => {
	const { isFallback } = useRouter();

	const title = `Character - ${character?.name}`;

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
						src={character?.avatarSrc || DEFAULT_IMG_ERROR}
						alt={character?.name}
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
			</Container>
		</>
	);
};

export const getStaticPaths: GetStaticPaths = async () => {
	const { data } = await client.query({ query: GET_CHARACTERS });

	const paths =
		data?.characters?.results?.slice(0, 10).map(({ id }) => ({
			params: { id },
		})) || [];

	return {
		paths,
		fallback: true,
	};
};

export const getStaticProps: GetStaticProps = async (ctx: GetStaticPropsContext) => {
	const { data } = await client.query({
		query: GET_CHARACTER,
		variables: { id: ctx.params?.id as string },
	});

	if (!data) return { notFound: true };

	return {
		revalidate: 60, // One minute
		props: {
			character: data.character,
		},
	};
};

export default Page;
