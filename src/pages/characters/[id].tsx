import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { Box, CircularProgress } from '@mui/material';

import { client } from 'graphql/client';
import { GET_CHARACTER } from 'graphql/getCharacter';
import { GET_CHARACTERS } from 'graphql/getCharacters';

import { Container } from 'components/Container';
import { CharacterInfo, CharacterProps } from 'components/CharacterInfo';

const Page = ({ character }: CharacterProps) => {
	const { isFallback } = useRouter();

	const title = `Character - ${character?.name}`;

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
				<CharacterInfo character={character} />
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
